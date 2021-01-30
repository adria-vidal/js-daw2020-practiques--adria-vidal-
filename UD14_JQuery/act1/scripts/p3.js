/** Cambiamos color de fondo del primer y ultimo elemento de lista
 * y otro más a traves del ID
 */
$(() => {
  $("ul li").first().css("background", "red");
  $("ul li").last().css("background", "blue");
  $("ul").find("#3").css("background", "yellow"); 
});
