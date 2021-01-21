/**
 * Asignamos a variables los siguientes elementos
 */
const inNombre = document.getElementById("inNombre");
let nombre = document.getElementById("nombre");

/** Si hay un nombre guardado en SessionStorage se escribe en el parrafo
 * en caso contrario, no aparece nada
 */
nombre.textContent = sessionStorage.getItem("nombre");

/** Evento al pulsar 'Enter' guardaremos el nombre en SessionStorage */
inNombre.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    sessionStorage.setItem("nombre", inNombre.value);
  }
});
