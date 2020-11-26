/**
 * funcio para redirigir la pagina a  "https://www.google.es/"
 */
function Redirigir() {
  location = "https://www.google.es/";
}
document.write("<h1>Nos vamos</h1>");
//redirigimos la pagina  en 5 s
setTimeout(() => {
  Redirigir();
}, 3000);
