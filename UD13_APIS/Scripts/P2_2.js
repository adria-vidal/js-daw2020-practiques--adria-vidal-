const video = document.getElementById("video");
let cuenta = document.getElementById("cuentaatras");

/** Evento para la pausa y reanudo del video al hacer click izq. */
video.addEventListener("click", () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});
/**Evento para mostrar la duración del video al hacer click derecho */
video.addEventListener("contextmenu", () => {
  let duracion = parseInt(video.duration);
  let seg = "";
  let min = "";
  if (duracion > 59) {
    min = duracion / 60;
    seg = duracion / 60;
  } else {
    min = 0;
    seg = duracion;
  }
  cuenta.textContent = "Duración del video: " + min + ":" + seg;
});
