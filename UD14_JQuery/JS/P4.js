"use strict";
$(() => {
  let destino = $("#container");

  //Creo el enlace

  let $enlace = $('<a href="">back to the top</a>');

  //Inserto el enlace despues de cada parrafo
  $("p").after($enlace);
});
("use strict");

$(() => {
  
  //ultimo 'li' de la primera lista
  $("ul").first().find("li").last().css("background-color", "blue");
  //tercer 'li' de 2nda lista
  $("ul").eq(1).find("li").last().prev().css("background-color", "yellow");
  //primer 'li' de la ultima lista
  $("ul").last().find("li").first().css("background-color", "red");
});
