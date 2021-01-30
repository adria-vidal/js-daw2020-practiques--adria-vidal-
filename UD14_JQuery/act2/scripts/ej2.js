$(() => {
  $('a[href^="mailto"]').addClass("mailto");
  /** link PDF */
  $('a[href$=".pdf"]').addClass("pdflink");

  //** Añadimos clase horizontal */
  $("div#container ul#selected-plays > li").addClass("horizontal");

  /** Añadimos clase sub-level a los 'li' hijos de listas*/
  $("div#container ul#selected-plays ul").addClass("sub-level");

  /** Añadimos clase bigletter a la primera letra del los elementos de nivel superior */
  $("div#container > ul > li").addClass("big-letter");

  /** Añadimos clase henrylink */
  $('a[href^="http"][href*="henry"]').addClass("henrylink");

  /** Añadimos la clase para las fila impares */
  $(" tbody > tr:nth-child(odd)").addClass("alt");

  /** Añadimos la clase Highlight a los elementos que contienen Henry
   * que no tienen hijos
   */
  $('table tr > td:contains("Henry")').addClass("highlight");
});
