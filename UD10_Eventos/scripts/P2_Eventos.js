/**
 * Eventos para arrastrar el div origen hasta el div destino
 * capturamos los eventos y llamamos a las correspondientes funciones
 */
document.getElementById('capa1').addEventListener('dragend', dragend);
document.getElementById('capa1').addEventListener('drag', opacidad);
document.getElementById('capa2').addEventListener('dragenter', dragenter);
document.getElementById('capa2').addEventListener('dragleave', dragleave);
document.getElementById('capa2').addEventListener('dragover', function (event) {
  event.preventDefault();
  document.getElementById('capa2').style.backgroundColor = 'red';
});
document.getElementById('capa2').addEventListener('drop', drop);
//opacidad al 50% cuando arrastramos
function opacidad(ev) {
  console.log(ev);
  document.getElementById('capa1').style.opacity = '50%';
}
//desaparece div con opacidad al 0%
function dragend() {
  document.getElementById('capa1').style.opacity = '0%';
}
//al salir de la zona div2, color de fondo invisible
function dragleave(ev) {
  console.log('Leave' + ev);
  document.getElementById('capa2').style.backgroundColor = 'rgba(0,0,255,0)';
}

//cambio del texto y color fondo del div2 y borrado
function drop(ev) {
  console.log('Drop' + ev);
  document.getElementById('capa2').style.backgroundColor = 'yellow';
  document.getElementById('capa2').innerHTML = 'Lo has logrado!';
  document.getElementById('capa1').innerHTML = ' ';
}
//evento para cambiar color fondo al entrar en el div
function dragenter() {
  document.getElementById('capa2').style.backgroundColor = 'red';
}

//
