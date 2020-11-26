var arraylista = new Array(
  '<li>estaba</li>',
  '<li>adria</li>',
  '<li>ayer</li>',
  '<li>diálogo</li>',
  '<li>trasladando</li>',
  '<li>perdido</li>',
  '<li>podrido</li>',
  '<li>vaso</li>'
);
/**
 * Confirmamos si queremos ordenar la lista
 */
var confirmar = window.confirm('Quieres ordenar la lista?');
if (confirmar == true) {
  setTimeout(() => {
    cambiarArray(arraylista);
  }, 3000);
} else {
  document.write('No van a ordenarse las palabras');
}
/**
 * Aqui eliminamos la lista predefinida para crear la nueva
 * con los datos ordenados
 */
function cambiarArray() {
  //ordenar
  var lista = ordenarse();
  //eliminamos toda la lista
  let base = document.getElementById('c');
  let fullArray = document.querySelectorAll('ul li')[0];
  base.removeChild(fullArray);
  //creamos lista nueva ordenada
  let base2 = document.getElementById('c');
  //bucle para insertar los elementos a partir de la lista original
  for (let i = 0; i < lista.length; i++) {
    let newElemento = document.createElement('li');
    newElemento.textContent = lista[i];
    //añadimos el nuevo elemento al nodo padre
    base2.appendChild(newElemento);
  }
  document.write(lista);
}
/**
 * obtenemos elementos li de la lista y lo convertimos en un array
 * para manejarlos y ordenarlos en forma de objeto
 */
function ordenarse() {
  //convertimos li en array
  var lista = [];
  var objectLista = [...document.getElementsByTagName('li')];
  //añadimos contenido del los 'li'
  for (let i = 0; i < objectLista.length; i++) {
    lista[i] = objectLista[i].innerHTML;
  }
  //ordenamos la lista
  lista.sort();
  return lista;
}
