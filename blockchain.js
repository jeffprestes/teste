function voltaFundo() {
  $("#formImovel").css("background-color", "yellow");
  $("h1").html("Registro Eletronico de Imoveis");
}

function salvarRegistro() {
  event.preventDefault();
  if ($("#_endereco").val().length != 22) {
    $("#_endereco").focus();
    alert("Endereço inválido");
    return;
  }

  if (!$("#_endereco").val().startsWith("0x")) {
    alert("Endereço inválido");
    $("#_endereco").focus();
    return;
  }

  if ($("#_nomeProprietario").val().length < 5) {
    alert("Nome do proprietário inválido");
    $("#_nomeProprietario").focus();
    return;
  }

  var valorVenal = $("#_valorVenal").val() * 1;
  if (valorVenal < 10000) {
    alert("Valor venal inválido");
    $("#_valorVenal").focus();
    return;
  }

  if (typeof contratoComSignatario === "undefined") {
    alert("Você não está conectado ao Ethereum. Verifique seu Metamask");
    return;
  }

  contratoComSignatario
    .registraImovel($("#_endereco").val(), $("#_nomeProprietario").val(), $("#_valorVenal").val() * 1)
    .then((transacao) => {
      $("#descricaoStatusTransacoes").innerHTML = "Transação enviada. Aguarde pela mineração...";
      $("#statusTransacoes").toggle();
      transacao
        .wait()
        .then((resultado) => {
          console.log("registraImovel - o resultado foi ", resultado);
          $("#descricaoStatusTransacoes").innerHTML = "Transação executada.";
        })
        .catch((err) => {
          console.error("registraImovel - a transação foi minerada e houve um erro. Veja abaixo");
          console.error(err);
          $("#descricaoStatusTransacoes").innerHTML = "Algo saiu errado: " + err.message;
        });
    })
    .catch((err) => {
      console.error("registraImovel - tx só foi enviada");
      console.error(err);
      $("#descricaoStatusTransacoes").innerHTML = "Algo saiu errado antes de enviar ao Ethereum: " + err.message;
    });
}

function easterEgg() {
  $("#formImovel").css("background-color", "pink");
  $("h1").html("Nathaly rulez...");
  $("#divEndereco").css("background-color", "green");
}
