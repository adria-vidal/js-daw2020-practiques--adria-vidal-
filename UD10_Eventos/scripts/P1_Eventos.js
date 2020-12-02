/**
 * evento para mostrar imagen de fondo cuando se combine
 * la tecla Alt+ F12
 */
window.addEventListener(
  'keyup',
  function (teclaf12) {
    if (teclaf12.altKey == true && teclaf12.key == 'F12') {
      mostrarImg();
    }
    //funcion mostrar imagen fondo
    function mostrarImg() {
      document.body.style.backgroundImage = "url('fondo.jpg')";
    }
  },
  false
);
