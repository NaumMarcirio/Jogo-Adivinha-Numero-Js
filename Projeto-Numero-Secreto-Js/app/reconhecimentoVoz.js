window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-br";
recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(e) {
  let fala = parseInt(e.results[0][0].transcript);
  const numero = document.querySelector(".box");
  numero.innerHTML = fala;
  verificaChute(fala);
}

recognition.addEventListener("end", () => {
  recognition.start();
});
