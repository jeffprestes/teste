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

  alert("Tudo certo com os dados do formulário");
}

function easterEgg() {
  $("#formImovel").css("background-color", "pink");
  $("h1").html("Nathaly rulez...");
  $("#divEndereco").css("background-color", "green");
}
