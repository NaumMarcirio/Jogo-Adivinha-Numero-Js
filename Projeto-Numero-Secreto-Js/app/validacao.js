console.log(numeroAleatorio);
function verificaChute(fala) {
  const chute = parseInt(fala);
  const msgChute = document.querySelector(".msg-chute");

  //validacao pra ver se o chute é um numero
  if (Number.isNaN(chute)) {
    msgChute.innerHTML = `<div>Valor Inválido, não é um número<div>`;
    return;
  }
  //validacao pra ver se o numero está entre os números declarados
  if (chute < menorValor || chute > maiorValor) {
    msgChute.innerHTML = `<div>Valor inválido o número deve estar entre ${menorValor} e ${maiorValor}<div>`;
    return;
  }

  //validação chute com o numero sorteado
  if (chute === numeroAleatorio) {
    document.body.innerHTML = `
    <h1>PARABÉNS VOCÊ ACERTOU</h1>
    <h2>O Número Secreto era ${numeroAleatorio}</h2>
    <button class="btnReload" id="btnReload">Jogar Novamente</button>
    `;
    botao = document.querySelector("#btnReload");
    botao.addEventListener("click", () => {
      document.location.reload();
    });
  } else if (chute < numeroAleatorio) {
    msgChute.innerHTML = `<div class="msg-chute">
    O número secreto é MAIOR<i
      class="fa-solid fa-up-long"
      style="color: #f0f0f0"
    ></i>
  </div>`;
  } else if (chute > numeroAleatorio) {
    msgChute.innerHTML = `<div class="msg-chute">
    O número secreto é MENOR<i
      class="fa-solid fa-down-long"
      style="color: #f0f0f0"
    ></i>
  </div>`;
  }
  return;
}
