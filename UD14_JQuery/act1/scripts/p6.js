/** Cuando pulsemo boton, contará y mostrará
 * cuantos items hay dentro del 'div'
 */
$(() => {
    $('button#button1').click(() => {
      var items = $('div.div').children().length;
  
      $('div')
        .eq(2)
        .append('<p>Hay ' + items + ' elementos dentro del segundo div</p>');
    });
  });