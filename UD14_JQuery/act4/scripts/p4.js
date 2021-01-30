$(() => {
  let $inicio = "<div id='inicio'></div>";
  let $link = "<a href='#inicio'>Back to the top</a>";

  /**P1 Inserto el enlace despues de cada parrafo*/
  //$('div.chapter').find('p').after($link);

  /** P2 Movemos el footnote antes de div*/
  //$('div#footer').before($('.footnote'));

  /** P3  lista enumerada de  "footnote"*/
  //$('.footnote').wrapAll('<ol></ol>');
  //$('.footnote').wrap('<li></li');

  $("div.chapter")
    .after($(".footnote"))
    .nextAll(":not(#footer)")
    .wrapAll("<ol></ol>")
    .wrap("<li></li>");

  /** P5.1 Añado el div para que los links funcionen posteriormente bien */
  $($inicio).prependTo("body");

  /**P5.2 Insertamos los links despues de los párrafos */
  $($link).insertAfter("div.chapter p");
});
