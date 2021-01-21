"use strict";
let cuenta = document.getElementById("temporizador");

/** Permiso al usuario para recibir notificaciones */
let permiso = Notification.permission;

if (permiso == "granted") {
  Notification.requestPermission();
}

function temporizador(ms) {
  return new Promise(function (resolv, reject) {
    setTimeout(() => {
      resolv();
    }, ms);
  });
}
cuentaAtras();

/** Funcion para mostrar notificación emergente */
function notificacion() {
  console.log("hola");
  let notificacion = new Notification("Información", {
    body: "Se ha publicado un video nuevo",
  });
  /** Evento para redirigir a la pantalla video al hacer click izq. */
  notificacion.addEventListener("click", (e) => {
    location.href = "/UD13_APIS/HTML/video.html";
  });
}

/** Funcion asícrona para decrementar el contador
 * hasta 0, y cuando llegue, lanzar la notificacion
 */
async function cuentaAtras() {
  let cont = 5;
  cuenta.textContent = cont;

  while (cont > 0) {
    let promesa = temporizador(1000);
    await promesa
      .then(() => {
        cont--;
        cuenta.textContent = cont;
      })
      .catch((err) => {
        console.log("error");
      });
  }
  notificacion();
}

/** Funcion para mostrar notificación emergente */
function notificacion() {
  console.log("comprobacion");
  let notificacion = new Notification("Información", {
    body: "Se ha publicado un video nuevo",
  });
  /** Evento para redirigir a la pantalla video al hacer click izq. */
  notificacion.addEventListener("click", (e) => {
    location.href = "/UD13_APIS/HTML/video.html";
  });
}
