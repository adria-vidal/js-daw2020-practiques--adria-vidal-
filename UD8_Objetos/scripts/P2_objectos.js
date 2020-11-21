//cambiamos el prototipo y le añadimos funcion para sacar media aritmética
Array.prototype.media = function () {
  let suma = this.reduce((previo, current) => current + previo);
  return suma / this.length;
};

//let list = [3, 5, 6, 11, 4, 2, 5, 9];
let list = new Array(3, 5, 6, 11, 4, 2, 5, 9);

console.log('La media aritmética es: ' + list.media());
console.log(Array.prototype);
