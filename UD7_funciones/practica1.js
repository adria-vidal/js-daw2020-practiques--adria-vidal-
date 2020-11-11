//sacamos la ventana emergente para introducir la palabra
//la guardamos en variable palabra
var cad;
var palabra = new Set();
var veces = true;
//ordenamos el array
var ordenado = Array.from(palabra).sort();
//revertimos el array ordenado
var revert = ordenado.reverse();

while (veces) {
  //guardamos la palabra insertada a traves de la ventana emergente
  cad = window.prompt('Introduce palabra');
  //si la palabra es null
  if (cad == '' || cad == null) break;
  else {
    //añadimos la palabra a la cadena
    palabra.add(cad);
  }
}
//llamamos a la funcion
mostrar();

function mostrar() {
  var array = '';
  //iteramos el array
  for (palabra of revert) {
    array += palabra + ' , ';
  }
  //mostramos por consola el resultado
  console.log('Array ordenado' + array);
}
