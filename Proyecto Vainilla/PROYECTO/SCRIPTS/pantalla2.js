
/**
 * Funcion para mostrar un saludo con el correo 
 * que se ha insertado en la página anterior
 */
function intro() {
 
  
  let container = document.getElementById('body2');

  let saludo = document.createElement("h3");
  let parr = document.createElement("p");
  

  let usuario = JSON.parse(Cookies.get('user'));
  let contCookie = JSON.parse(Cookies.get(usuario.email));

  //agregamos contenido a cada elemento
  saludo.textContent = `Hola ${contCookie.email}`;
  parr.textContent = `Última vez que entraste fue: ${contCookie.fechaNow}, hora: ${contCookie.horaNow}`;
  
  //----- | AGREGO CADA ELEMENTO AL CONTENEDOR | -------
  container.appendChild(saludo);
  container.appendChild(parr);

}

intro();


