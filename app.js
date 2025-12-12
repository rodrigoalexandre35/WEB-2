const prompt = require("prompt-sync")();


function avaliarRiscoDeCredito(rendaMensal, dividaAtual) {
  rendaMensal = parseFloat(rendaMensal);
  dividaAtual = parseFloat(dividaAtual);

  let taxa = (dividaAtual / rendaMensal) * 100;

  if (taxa < 10) {
    return "Risco Baixo";
  } else if (taxa < 30) {
    return "Risco Moderado";
  } else {
    return "Risco Alto";
  }
}

let renda = prompt("Digite sua renda mensal: ");
let divida = prompt("Digite sua dívida atual: ");

let resultado = avaliarRiscoDeCredito(renda, divida);

console.log(`Resultado: ${resultado}`);



let numeros = [];

while (true) {
  let valor = prompt("Digite um número (ENTER para parar): ");
  if (valor === "") break;
  numeros.push(Number(valor));
}

console.log("Maior número:", Math.max(...numeros));
console.log("Menor número:", Math.min(...numeros));

let dobro = numeros.map(n => n * 2);
console.log("Dobro dos números:", dobro);

let maioresQueCinco = numeros.filter(n => n > 5);
console.log("Maiores que 5:", maioresQueCinco);


let carro = {
  marca: "Fiat",
  modelo: "Uno",
  ano: 2015,
  exibirInfo: function () {
    console.log(`Marca: ${this.marca} | Modelo: ${this.modelo} | Ano: ${this.ano}`);
  }
};

carro.exibirInfo();

carro.cor = "Preto";
carro.ano = 2025;

console.log("Carro atualizado:", carro);


class Livro {
  constructor(titulo, autor, ano) {
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
  }

  detalhes() {
    console.log(`Livro: ${this.titulo} | Autor: ${this.autor} | Ano: ${this.ano}`);
  }
}

let livro1 = new Livro("Dom Casmurro", "Machado de Assis", 1899);
let livro2 = new Livro("Harry Potter", "J.K. Rowling", 1997);

livro1.detalhes();
livro2.detalhes();



let palavra = prompt("Digite uma palavra: ");

console.log("Quantidade de letras:", palavra.length);

let invertida = palavra.split("").reverse().join("");

if (palavra === invertida) {
  console.log("É um palíndromo");
} else {
  console.log("Não é um palíndromo");
}
