const prompt = require("prompt-sync")();



function avaliarTemperatura(temperatura, unidade) {
  let temp = parseFloat(temperatura);

  if (unidade === "F") {
    temp = (temp - 32) * (5 / 9);
  }

  if (temp < 36.5) {
    return "Hipotermia leve";
  } else if (temp <= 37.5) {
    return "Temperatura Normal";
  } else {
    return "Estado Febril";
  }
}

let temperatura = prompt("Digite a temperatura: ");
let unidade = prompt("Digite a unidade (C ou F): ").toUpperCase();

let resultadoTemp = avaliarTemperatura(temperatura, unidade);

console.log(`Classificação: ${resultadoTemp}`);


let notas = [];

while (true) {
  let nota = prompt("Digite uma nota (ENTER para parar): ");
  if (nota === "") break;
  notas.push(Number(nota));
}

// Média
let soma = notas.reduce((total, n) => total + n, 0);
let media = soma / notas.length;

console.log("Média das notas:", media);

// Aprovado ou Reprovado
let aprovacao = notas.map(nota =>
  nota >= 7 ? "Aprovado" : "Reprovado"
);

console.log("Situação dos alunos:", aprovacao);

// Apenas notas aprovadas
let notasAprovadas = notas.filter(nota => nota >= 7);
console.log("Notas aprovadas:", notasAprovadas);



let perfilUsuario = {
  nome: "João",
  email: "joao@email.com",
  cidade: "São Paulo",
  saudacao: function () {
    console.log(`Olá, ${this.nome}! Seu email de contato é ${this.email}.`);
  }
};

perfilUsuario.saudacao();

perfilUsuario.status = "Ativo";
perfilUsuario.cidade = "Sua Cidade Aqui";

console.log("Perfil atualizado:", perfilUsuario);


class ContaBancaria {
  constructor(titular, saldo, numeroConta) {
    this.titular = titular;
    this.saldo = saldo;
    this.numeroConta = numeroConta;
  }

  extrato() {
    console.log(
      `Conta Nº: ${this.numeroConta} | Titular: ${this.titular} | Saldo Atual: R$${this.saldo}`
    );
  }

  depositar(valor) {
    this.saldo += valor;
  }
}

let conta1 = new ContaBancaria("Maria", 1000, "12345");
let conta2 = new ContaBancaria("Carlos", 500, "67890");

conta1.depositar(200);

conta1.extrato();
conta2.extrato();


let email = prompt("Digite um email: ");

console.log("Quantidade de caracteres:", email.length);

let temArroba = email.includes("@");
let posArroba = email.indexOf("@");
let posPonto = email.lastIndexOf(".");

if (
  temArroba &&
  posArroba === email.lastIndexOf("@") &&
  posPonto > posArroba
) {
  console.log("Email com formato VÁLIDO");
} else {
  console.log("Email com formato INVÁLIDO");
}
