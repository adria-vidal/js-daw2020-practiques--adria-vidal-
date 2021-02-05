/** Documento para cambiar de estilo el documento HTML */

$(() => {
  let $switcher = $('.switcher');
  let $box_botones = $switcher.find('button');

  /** borramos los botones */
  $box_botones.remove();

  /**
   * Evento para cambiar el switcher a verde o default al pasar o salir
   *  el raton por encima
   */
  $switcher.hover(
    function () {
      $(this).addClass('hover');
    },
    function () {
      $(this).removeClass('hover');
    }
  );
  /** creamos objeto para los botones, para añadir o quitar */
  let objeto_botones = [
    '<button class="selected" data-style="default">Defecto</button>',
    '<button data-style="narrow">Estrecho</button>',
    '<button data-style="large">Grande</button>',
  ];
  /** Evento para que aparezcan los botones al pulsar switcher */
  $switcher.on('click', function (ev) {
    $new_buttons.toggleClass('hidden');
  });

  /** Evento para el cambio de estilo del html
   * eliminamos la clase que esta seleccionada para cambiarlo al nuevo estilo que pulsamos
   */
  $switcher.on('click', 'button', function (ev) {
    let $main = $('main');

    //evitamos la propagacion del evento
    ev.stopPropagation();
    $('button').removeClass('selected');
    $(this).toggleClass('selected');

    /** Condiciones para cambiar de un estilo a otro
     * eliminando la que esta selecionada y añadiendo la nueva seleccionada
     * en caso de haber más estilos podremos ir añadiendo aqui y cuando no haya ninguna
     * se quedara la classe default
     */
    if ($(this).text() === 'Grande') {
      $main.removeClass('narrow');
      $main.addClass('large');
    } else if ($(this).text() === 'Estrecho') {
      $main.removeClass('large');
      $main.addClass('narrow');
    } else {
      $main.removeClass('large').removeClass('narrow');
    }
  });

  /**-----BOTONES NUEVOS----- */
  /** Agregamos los nuevos botonbes al switcher */
  $(objeto_botones).each(function (ind, item) {
    $switcher.append(item);
  });

  /** Obtenemos los nuevos botones */
  let $new_buttons = $switcher.find('button');

  /** Añadimos clase a los nuevos botones */
  $new_buttons.toggleClass('hidden');
});
