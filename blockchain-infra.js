//Definicoes de variaveis para toda a pagina (ou site)
//Variaveis essas relacionadas a operações com Metamask e Contratos Inteligentes no Ethereum
var contaAtual;
var provedorDeSignatarios;
var signatario;
var contratoComSignatario;

/*
FUNCOES RELACIONADAS A OPERACOES COM METAMASK E CONTRATOS INTELIGENTES NO ETHEREUM
*/
function conectaAoMetamask() {
  event.preventDefault();
  console.log("conectaAoMetamask chamado");
  if (typeof window.ethereum === "undefined") {
    alert("Por favor instale o MetaMask em metamask.io");
    return;
  } else {
    requisitaAcessoAContas();
  }
}

function requisitaAcessoAContas() {
  ethereum
    .send("eth_requestAccounts")
    .then(gerenciaTrocaDeSelecaoDeContas)
    .catch((err) => {
      if (err.code === 4001) {
        // EIP 1193 userRejectedRequest error
        console.log("Por favor, dê permissão a este site no seu Metamask.");
      } else {
        console.error(err);
      }
    });
  ethereum.on("accountsChanged", gerenciaTrocaDeSelecaoDeContas);
}

function gerenciaTrocaDeSelecaoDeContas(_contas) {
  var contas = _contas.result;
  console.log("gerenciaTrocaDeSelecaoDeEndereco", contas.length);
  provedorDeSignatarios = new ethers.providers.Web3Provider(web3.currentProvider);
  signatario = provedorDeSignatarios.getSigner();
  contratoComSignatario = new ethers.Contract(enderecoContrato, abiContrato, signatario);
  if (contas.length === 0) {
    alert("Por favor instale o MetaMask em metamask.io");
  } else if (contas[0] !== contaAtual) {
    contaAtual = contas[0];
    if (contaAtual) {
      console.log("gerenciaTrocaDeSelecaoDeContas objects", contas, contaAtual, signatario, contratoComSignatario);
      $("#btnSalvar").prop("disabled", false);
    }
  }
}

var abiContratoInteligente;
