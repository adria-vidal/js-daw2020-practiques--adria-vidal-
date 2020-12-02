document.getElementById('capa1').addEventListener('dragend', dragend);
document.getElementById('capa1').addEventListener('drag', opacidad);
document.getElementById('capa2').addEventListener('dragenter', dragenter);
document.getElementById('capa2').addEventListener('dragleave', dragleave);
document.getElementById('capa2').addEventListener('dragover', dragover);
document.getElementById('capa2').addEventListener('drop', drop);

function opacidad(ev) {
  console.log(ev);
  document.getElementById('capa1').style.opacity = '50%';
}
function dragend() {
  document.getElementById('capa1').style.opacity = '0%';
}
function dragleave() {
  document.getElementById('capa2').style.backgroundColor = 'none';
}

function dragover(event) {
  event.preventDefault();
  document.getElementById('capa2').style.backgroundColor = 'green';
}
function drop(ev) {
  console.log('Drop' + ev);
  document.getElementById('capa2').style.backgroundColor = 'yellow';
  document.getElementById('capa2').innerHTML = 'Lo has logrado!';
}
function dragenter() {
  document.getElementById('capa2').style.backgroundColor = 'red';
}

//
