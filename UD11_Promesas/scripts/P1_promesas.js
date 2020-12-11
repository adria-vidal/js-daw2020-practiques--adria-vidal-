/**
 * creamos funcion temporizador con el tiempo pasado como parametro
 * encargado de ejecutar la promesa cuando transcurra ese tiempo
 * @param {*} tiempo parametro con el tiempo que se ejecuta la function
 */
function temporizador(tiempo) {
  const promesa = new Promise((resolve, reject) => {
    //temporizador para el OK
    setTimeout(() => {
      resolve("Tiempo concluido");
    }, tiempo);
    //temporizador para el error
    setTimeout(() => {
      reject(new Error("El tiempo no va bien"));
    }, tiempo * 2);
  });
  return promesa;
}
/* si todo va OK, muestra mensaje definido
 sino, muestra el mensaje de error definido
 */
temporizador(5000).then(
  (res) => {
    document.getElementById("mensaje").innerHTML = res;
  },
  (err) => {
    document.getElementById("mensaje").innerHTML = err;
  }
);
