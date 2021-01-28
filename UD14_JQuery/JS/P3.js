$(() => {
    $('ul li').first().css('background', 'red');
    $('ul li').last().css('background', 'blue');
    $('ul').find('#tercero').css('background', 'yellow'); // Filter by id
  });