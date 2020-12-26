
let preguntas = [];
let contenedorPreguntas = document.getElementById('wrapper-Pregunta');
let buttonBack = document.getElementById('atras');
let buttonSave = document.getElementById('guardar');



buttonBack.addEventListener(
  'click',
  () => {
    var redirecciona = '/Proyecto Vainilla/PROYECTO/HTML/pantalla2.html';
    location.href = redirecciona;
  },
  true
);
buttonSave.addEventListener('click', () =>buttonBack.disabled=true);
window.addEventListener('load', mostrar(tiempo));


/**
 * Creamos la tabla que se ha definido en los requisitos del proyecto 
 * además insertaremos la preguntas que se hayan guardado en la cookie 
 * en caso de que las haya
 */
function mostrar(tiempo) {
  
  //generamos la tabla con promesa para realizarlo de forma asíncrona
  let promesa = new Promise((resolve, reject) => {
    let txtCarga = document.getElementById('p');
    txtCarga.textContent = 'Cargando respuestas..';
    container.appendChild(txtCarga);

    if (tiempo<5000) {
      container.removeChild(txtCarga);
      let 
    }else{
setTimeout(() =>{
  container.removeChild(txtCarga);
  let contCookie =JSON.parse(Cookies.get())

})
    }



  })



}