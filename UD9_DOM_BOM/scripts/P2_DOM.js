/**
 * Funcion pora obtener los valores de la cookie
 * @param {*} nomcookie
 */
function getCookie(nomcookie) {
  var nom = nomcookie + "=";

  const array = document.cookie.split(";");
  for (let i = 0; i < array.length; i++) {
    var element = array[i];
    //devuelve cadena despues del '='
    if (element.indexOf(nom) == 0) {
      return element.substring(nom.length, element.length);
    }
  }
}
/**
 * Funcion para agregar/crear elementos a la cookie
 * @param {*} nomcookie nombre que le asignamos a la cookie
 * @param {*} contador variable que cuenta las visitas
 * @param {*} expiraCookie fecha en la que expira la cookie
 */
function agregarCookie(nomcookie, contador, expiraCookie) {
  document.cookie = nomcookie + "=" + contador + ";" + expiraCookie;
}
/**
 * metodo para contar las visitas y realizar
 * las acciones de agregado y eliminado de la cookie segun las visitas
 * @param {*} day variable de dias que tardará en expirar la cookie
 */
function contarvisitas(day) {
  var nomcookie = "cookieadria";
  var contador = getCookie(nomcookie);
  const hoy = new Date();
  //calculamos un mes en milisegundos y asignamos a variable
  var expira = hoy.getTime() + day * 24 * 60 * 60 * 1000;
  var expiraCookie = new Date(expira);

  if (!contador) {
    contador = 0;
  } else if (contador < 10) {
    contador = parseInt(contador) + 1;

    agregarCookie(nomcookie, contador, expiraCookie);
    document.write("Visitas en la página: " + contador);

    //eliminamos la cookie cuando supera las 10 visitas
  } else {
    document.cookie = nomcookie + "expires=Thu, 01 Jan 1970 00:00:00 UTC";
  }
}
contarvisitas(30);
