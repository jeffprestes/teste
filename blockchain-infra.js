//Definicoes de variaveis para toda a pagina (ou site)
//Variaveis essas relacionadas a operações com Metamask e Contratos Inteligentes no Ethereum
var contaAtual;
var provedorDeSignatarios;
var signatario;
var enderecoContratoInteligente;

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
    .request("eth_requestAccounts")
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
  console.log("gerenciaTrocaDeSelecaoDeEndereco", _contas.length);
  provedorDeSignatarios = new ethers.providers.Web3Provider(web3.currentProvider);
  signatario = provedorDeSignatarios.getSigner();
  //contractWithSigner = new ethers.Contract(contractAddress, contractAbi, signer);
  if (_contas.length === 0) {
    alert("Por favor instale o MetaMask em metamask.io");
  } else if (_contas[0] !== contaAtual) {
    contaAtual = _contas[0];
    if (contaAtual) {
      console.log("gerenciaTrocaDeSelecaoDeEndereco objects", _contas, contaAtual, signer);
      $("#btnSalvar").en;
    }
  }
}

var abiContratoInteligente;
