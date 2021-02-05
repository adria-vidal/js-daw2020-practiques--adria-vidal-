"use strict";
$(() => {
  /**
   * Recogemos el parrafo y lo dividimos en palabras
   * Borramos parrafo para evitar duplicado
   */
  let $parr = $("p");
  let $parrafo = $("p").html();
  let word = $parrafo.split(" ");
  $parr.html("");

  /** Bucle para ir añadiendo cada palabra con etiqueta span
   * y asi creamos el nuevo párrafo
   */
  for (word of word) {
    if (0 < word.length) {
      $parr.append("<span>" + word.trim() + "</span> ");
    }
  }
  
  /** Evento para que cambie el fondo y texto negrita del párrafo
   * al hacer click sobre la palabra
   */
  $parr.on("click", "span", function () {
    $(this).css({
      "font-weight": "bold",
      "background-color": "yellow",
    });
  });
});
