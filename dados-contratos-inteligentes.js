var enderecoContrato = "0xD899E278f5A17F4eea629Df8E9c4E63F401eB5c5";
var abiContrato = [
  {
    inputs: [
      {
        internalType: "address",
        name: "paramEndereco",
        type: "address",
      },
      {
        internalType: "string",
        name: "paramNomeProprietario",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "paramValorVenal",
        type: "uint256",
      },
    ],
    name: "registraImovel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "matricula",
        type: "uint256",
      },
    ],
    name: "devolveNomeProprietario",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "livro1",
    outputs: [
      {
        internalType: "address",
        name: "endereco",
        type: "address",
      },
      {
        internalType: "string",
        name: "nomeProprietario",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "valorVenal",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "livro2",
    outputs: [
      {
        internalType: "address",
        name: "endereco",
        type: "address",
      },
      {
        internalType: "string",
        name: "nomeProprietario",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "valorVenal",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
