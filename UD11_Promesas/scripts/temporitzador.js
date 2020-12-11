/**
 * creamos funcion temporizador con el tiempo pasado como parametro
 * encargado de ejecutar la promesa cuando transcurra ese tiempo
 * @param {*} tiempo parametro con el tiempo que se ejecuta la function
 * exportamos funciones del fichero que deseamos
 */

export { temporizador, cuenta };
function temporizador(tiempo) {
  const promesa = new Promise((resolve, reject) => {
    //temporizador para el OK
    setTimeout(() => {
      resolve('Tiempo concluido');
    }, tiempo);
    //temporizador para el error
    setTimeout(() => {
      reject(new Error('El tiempo no va bien'));
    }, tiempo * 2);
  });
  return promesa;
}
/**
 * Funcion asíncrona para realizar la cuenta atrás y escribirlo por pantalla
 * pasandole 4 parámetros
 * @param {Int} initnum numero inicial del contador
 * @param {node} elementWrite elemento en el que se escribe(body en este caso)
 * @param {number} interval numero en milisegundos, cada cuanto tiempo decrementamos el contador
 * @param {Int} fucionCallback callback para cuando el contador termine
 */
async function cuenta(
  initnum,
  elementWrite = document.querySelector('body'),
  interval = 1000,
  fucionCallback = () => {}
) {
  var cont = initnum;
  //obtenemos respuesta de la promesa y escribimos el contador en el body
  //mientras el contador sea positivo
  while (cont >= 0) {
    let promesa = await new Promise((resolve, reject) => {
      setTimeout(() => resolve('OK'), interval);
    })

      .then(() => {
        elementWrite.innerHTML = cont--;
      })

      //si hay error, le asignamos el valor -1 y asi paramos el bucle
      .catch((err) => {
        console.log(err);
        cont = -1;
      });
  }
  fucionCallback();
}
