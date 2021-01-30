/** Preguntamos al usuario al cabo de 3s
 * Si se confirma, llamamos a la función ordenar
 */
$(() => {
  setTimeout(() => {
    if (window.confirm("Quieres ordenarlas?")) {
      $("h5#titulo").text("Lista palabras ordenadas");
      ordenar();
    }
  }, 3000);
});

/**
 * Función para ordenar las palabras alfabeticamente
 */
function ordenar() {
  /**Obtenemos la lista y elementos hijo 'li' de la lista*/
  const $desorden = $("ul#desordenadas");
  const $palabras = $desorden.children("li").get();

  /** Ordenamos palabras alfabéticamente en castellano */
  const ordenadas = $palabras.sort((a, b) =>
    $(a).text().localeCompare($(b).text(), "es")
  );

  //Agrega las palabras ordenadas a la lista
  $.each(ordenadas, (clave, word) => {
    $desorden.append(word);
  });
}
