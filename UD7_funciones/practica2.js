//sacamos la ventana emergente para introducir la palabra
//la guardamos en variable palabra
var palabra = window.prompt('Escribe palabras');
//llamamos a la funcion pasandole la palabra
testing(palabra);

function testing(palabra) {
    var posicion = 0;
    //declaramos list como array vacio
    const list = [];
    //instanciamos un nuevo objeto Map
    const mapa_nombres = new Map();
    //mientras la palabra insertada no sea null..
    while (palabra !== null) {
        list[posicion] = palabra;
        posicion++;
    }
    //comparamos todas las palabras la list y cuando coincida una palabra
    //borra la palabra repetida y suma 1 al contador
    list.reduce((contadorpalabra, alm) => {
        contadorpalabra[alm] = (contadorpalabra[alm] || 0) + 1;
        //insertamos al map la palabra y el contador de esa palabra
        mapa_nombres.set(alm, contadorpalabra[alm]);
        //devuelve las veces que se ha insertado X palabra
        return contadorpalabra;
    }, {});
    //muestra por consola
    console.log(mapa_nombres);
}