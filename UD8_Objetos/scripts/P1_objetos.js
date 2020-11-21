function Punto(coordX, coordY) {
  //verificamos si es un numero
  this.x = isNaN(coordX) ? 0 : coordX;
  this.y = isNaN(coordY) ? 0 : coordY;
  //transfromamos el p1 por el p2
  this.cambio = function (p2) {
    this.x = p2.x;
    this.y = p2.y;
    return p1;
  };
  //hacemos copia dek punto 1, p1
  this.copia = function () {
    new Punto(this.x, this.y);
    return new Punto(this.x, this.y);
  };
  //funcion para sumar las coorednadas de los dos puntos
  this.suma = function (punto2) {
    var punto3 = new Punto();
    punto3.x = this.x + punto2.x;
    punto3.y = this.y + punto2.y;
    return punto3;
  };
}
//creamos los objetos
let p1 = new Punto('b', 20);
let p2 = new Punto(10, 20);
//llamamos a las funciones
let copia = p1.copia();
let cambio = p1.cambio(p2);
let p3 = p1.suma(p2);
//imprimimos resultados de las funciones
console.log('X: ' + p1.x + ', Y: ' + p1.y);
console.log('La copia del punto es X=' + copia.x + ', Y=' + copia.y);
console.log('El cambio se ha quedado en X=' + cambio.x + ', Y=' + cambio.y);
console.log('Suma de los dos puntos= X: ' + p3.x + ', Y: ' + p3.y);
