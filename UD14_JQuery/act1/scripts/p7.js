/** Cuando pulsemos boton, eliminareemos todas las opciones
 * y se creará una selecionada por defecto llamado 'blanco'
 */
$(() => {
    $('button#boton1').click(() => {
      $('select option').remove();
      $('select').append('<option value="Blanco" selected>Blanco</option>');
    });
  });