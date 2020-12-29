/**
 * Creamos modulo y exportamos las funciones para su utilizacion en los
 * otros archivos JS
 * Funcion para retornar fecha actual
 */
function getFecha() {
  let hoy = new Date();
  let fecha =
    hoy.getDate() + '-' + (hoy.getMonth() + 1) + '-' + hoy.getFullYear();
  let hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
  let fechaActual = fecha + ' ' + hora;
  return fechaActual;
}
/**
 * Actualizacion de la fecha y la hora por la actual
 */
function updateFecha(userActual) {
  let fechaNow = getFecha();

  //Obtengo la cookie del usuario conectado
  let infoUsuario = Cookies.get(userActual);

  //Lo convierto para poder modificarlo
  let objUsuario = JSON.parse(infoUsuario);
  objUsuario.fechaEntrada = fechaNow;
  let stringUsuario = JSON.stringify(objUsuario);

  //Guardo de nuevo la cookie
  Cookies.set(userActual, stringUsuario, { expires: 7 });
}

//FUNCIONES RESPECTIVAS A LA COOKIE

/**
 * Envia los datos de la cookie del usuario que se le pase.
 * @param {String} userActual
 * @param {Number} tiempo
 * @returns {Promise} Promesa que devuelve los datos del usuario actual
 */
function getDatosCookie(userActual) {
    let tiempo = 100;
  return new Promise((resolv, reject) => {
    setTimeout(() => {
      let datosUsuario = JSON.parse(Cookies.get(userActual));
      resolv(datosUsuario);
    }, tiempo);

    setTimeout(() => {
      let error = new Error('Error al obtener datos de la cookie');
      reject(error);
    }, tiempo * 2);
  });
}

/**
 *
 * Guarda los datos en la cookie del usuario que se le pase por paramentro
 * @param {Object} objDatos Datos de la cookie modificados
 * @param {String} userActual Usuario al cual se le va a modificar su informacion
 */
function guardarDatosEnCookie(objDatos, userActual) {
  let strPreguntas = JSON.stringify(objDatos);
  Cookies.set(userActual, strPreguntas, { expires: 7 });
}

/**
 * Guarda un usuario en una cookie junto con sus datos como son la fecha de acceso
 *  y sus preguntas
 * @param {Object} usuarioAGuardar Usuario que se va a guardar en la cookie
 * @param {*} datosUsuario Los datos de dicho usuario
 */
function saveUserCookie(usuarioAGuardar, datosUsuario) {
  let strDatosUsuario = JSON.stringify(datosUsuario);

  Cookies.set(usuarioAGuardar, strDatosUsuario, { expires: 7 });
  Cookies.set('userActual', usuarioAGuardar);
}

/**
 *  Establece una cookie que indica en todo momento cual es el usuario que ha iniciado sesion
 *  @param {String} userActual Usuario que esta acutualmente
 */
function setUserActual(userActual) {
  Cookies.set('userActual', userActual);
}

/**
 *
 * @returns {String} Devuelve el correo del usuario actual
 */
function getuserActual() {
  return Cookies.get('userActual');
}

export {
  getFecha,
  updateFecha,
  getDatosCookie,
  guardarDatosEnCookie,
  saveUserCookie,
  setUserActual,
  getuserActual,
};
