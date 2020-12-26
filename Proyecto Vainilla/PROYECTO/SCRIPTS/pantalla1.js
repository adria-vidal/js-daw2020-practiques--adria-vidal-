/**
 * Al pulsar la combinación de teclas o al esperar 5s
 * aparecerá la pantalla de bienvenida para introducir los datos
 */

 
 


window.addEventListener("keyup", function (teclaf10) {
  if (teclaf10.altKey == true && teclaf10.key == "F10") {
    mostrar();
  }
});
function mostrar() {
  document.body.style.backgroundColor = "white";
  document.getElementById("form").style.visibility = "visible";
  document.getElementById("header").style.visibility = "hidden";
}

let promesa = new Promise((resolve, reject) => {
  resolve = setTimeout(mostrar, 5000);
});
promesa.then(() => {
  console.log("Fase 1 OK");
});

// Comprobamos si el formato es correcto cuando perdemos el focus
let inputEmail = document.getElementById("email").addEventListener(
  "blur",
  (event) => {
    let pattemail = new RegExp(
      "^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
    );

    // creamos un mensaje de error si el formato no es el correcto y seleccionamos el texto del input
    if (pattemail.test(event.target.value) == false) {
      let textoEmail = document.getElementById("email")
      let errorEmail = document.createElement("span");
      errorEmail.setAttribute("class", "errorEmail");
      errorEmail.style.color = "red";
      errorEmail.style.backgroundColor = "black";
      //contenido del mensaje
      errorEmail.textContent = "FORMATO INCORRECTO. DEBE SER aaaa@bbbb.ccc";

      textoEmail.select();

      event.target.parentNode.insertBefore(
        errorEmail,
        event.target.nextSibling
      );
      /**si esta correcto el email, redireccionamos a la pantalla2
       * creamos y guardamos en la cookie el email del usuario
      */
    } else {
      
      var redirecciona = "/Proyecto Vainilla/PROYECTO/HTML/pantalla2.html";
        location.href = redirecciona;
    }
  },
  true
);

//evitamos la repetición del mensaje error
document.getElementById("email").addEventListener("focus", (event) => {
  let errorEmail = document.querySelector(".errorEmail");
  if (errorEmail) {
    errorEmail.parentNode.removeChild(errorEmail);
  }
});

/*sino existe la cookie, la creamos
 *y lo añadimos a la cookie
 */


