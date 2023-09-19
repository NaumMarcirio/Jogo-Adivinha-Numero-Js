let menorValor = 1;
let maiorValor = 100;
const numeroAleatorio = geraNumeroAleatorio();

function geraNumeroAleatorio() {
  return parseInt(Math.random() * maiorValor + 1);
}

function alteraValorTela(menorValor, maiorValor) {
  const elementoMenorValor = document.querySelector("#menor-valor");
  const elementoMaiorValor = document.querySelector("#maior-valor");

  elementoMenorValor.innerHTML = menorValor;
  elementoMaiorValor.innerHTML = maiorValor;
}

alteraValorTela(menorValor, maiorValor);
