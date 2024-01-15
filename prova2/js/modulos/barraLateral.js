let formularioAlt = document.getElementById("altInfo")

let abrirAlt2 = document.getElementById("editarConta");
abrirAlt2.addEventListener("click",  function (event) {
  event.preventDefault();


  formularioAlt.style.display = "flex";


})

let ebibirTodo = document.getElementById("Todo");
ebibirTodo.addEventListener("click",  function (event) {
  event.preventDefault();


  document.getElementById("tudo").style.display = "block";
  document.getElementById("favoritos2").style.display = "none";

})
let ebibirFavoritos = document.getElementById("favoritos");
ebibirFavoritos.addEventListener("click",  function (event) {
  event.preventDefault();


  document.getElementById("tudo").style.display = "none";
  document.getElementById("favoritos2").style.display = "block";

})

export default {ebibirFavoritos, ebibirTodo, abrirAlt2};