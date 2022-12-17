/*Declaracion de variable y pequeña animacion css */
const buscador = document.getElementById("buscador");
let titulos = document.getElementsByTagName("h1");
let titulo = titulos[0];
buscador.addEventListener("mouseover", function (ev) {
  titulo.style = "animation: titulo 1.3s ease forwards";
});
buscador.addEventListener("mouseout", function (ev) {
  titulo.style = "animation: titulo-reverse 1.3s ease forwards";
});
/* haciendo el buscador + clickable*/
let buscar = document.getElementById("buscar");
let boton = document.getElementById("boton");
let lista = document.getElementById("lista");
let centinela = false;
let valoraux;
/* cada vez que se inserte una tecla se actualizara el evento *sera util mas adelante* */
buscar.addEventListener("input", function (evento) {
  evento.preventDefault();
  /* insertamos el valor final del input en un auxiliar */
  valoraux = evento.target.value;
  function resetear() {
    evento.target.value = "";
  }
  /* checkeamos si el boton ha sido clickado en caso de serlo limpiamos input
        no es la manera optima pero la unica que encuentro de manera rapida*/
  setInterval(() => {
    if (centinela) {
      resetear();
      centinela = false;
      valoraux = "";
    }
  }, 100);
});
function creardivcheck(){
    let subdiv = document.createElement("div")
    subdiv.setAttribute("class", "checkeo");
    
    return subdiv;
}
/* esta parte deberia hacerse con cookies pero de manera rapida uso esta cosa fea para simularlas */
/* solo detectara las primeras 100 palabras guardadas */
let ContadorDePalabrasGuardadas = 0;
for (let i = 1; i < 101; i++) {
  if (localStorage.getItem(i) != null) {
    let elementonuevo = document.createElement("p");
    elementonuevo.innerHTML = localStorage.getItem(i);
    let divnuev = document.createElement("div");
    divnuev.className = "listado";
    let subdiv = creardivcheck();
    divnuev.appendChild(subdiv);
    divnuev.appendChild(elementonuevo);
    lista.appendChild(divnuev);
    ContadorDePalabrasGuardadas = i;
  }
}
boton.addEventListener("click", function (anadir) {
  anadir.preventDefault();
  if (valoraux !== undefined) {
    let elementonuevo = document.createElement("p");
    let divnuev = document.createElement("div");
    divnuev.className = "listado";
    let subdiv = creardivcheck();
    
    divnuev.appendChild(subdiv);
    divnuev.appendChild(elementonuevo);
    let insertarantesque = document.getElementsByClassName("listado");
    let insertar = insertarantesque[0];
    elementonuevo.innerHTML = valoraux;
    console.log(divnuev.innerHTML);
    let traslación = insertarantesque.length;
    lista.appendChild(elementonuevo);
    ContadorDePalabrasGuardadas++;
    localStorage.setItem(ContadorDePalabrasGuardadas, valoraux);
    centinela = true;
    reloadStylesheets()
  }
});
/* Descomentar esto y refrescar para resetear la lista guardada  */
let reset = document.getElementById("reset")
reset.addEventListener("click", function(reset){
    localStorage.clear()
    document.location.reload(true)

})
