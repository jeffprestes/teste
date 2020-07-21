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
    .then(gerenciaTrocaDeSelecaoDeEndereco)
    .catch((err) => {
      if (err.code === 4001) {
        // EIP 1193 userRejectedRequest error
        console.log("Por favor, dê permissão a este site no seu Metamask.");
      } else {
        console.error(err);
      }
    });
  ethereum.on("accountsChanged", gerenciaTrocaDeSelecaoDeEndereco);
}

function gerenciaTrocaDeSelecaoDeEndereco(_contas) {
  console.log("gerenciaTrocaDeSelecaoDeEndereco", _contas.length);
  provedorDeSignatarios = new ethers.providers.Web3Provider(web3.currentProvider);
  signatario = providerSigner.getSigner();
  //contractWithSigner = new ethers.Contract(contractAddress, contractAbi, signer);
  if (_contas.length === 0) {
    alert("Por favor instale o MetaMask em metamask.io");
  } else if (_contas[0] !== contaAtual) {
    contaAtual = _contas[0];
    if (contaAtual) {
      console.log("gerenciaTrocaDeSelecaoDeEndereco objects", _contas, contaAtual, signer);
    }
  }
}
