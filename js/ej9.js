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
/*Evitamos con esta expresion regular la inserción de espacios en blanco*/
let reg = /[^\s-]/
function anadir(anadir){
  {
    console.log(valoraux);
    if ((valoraux !== undefined)&&(reg.test(valoraux))) {
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
      eliminar(divnuev)

      lista.appendChild(divnuev);
      ContadorDePalabrasGuardadas++;
      localStorage.setItem(ContadorDePalabrasGuardadas, valoraux);
      centinela = true;
      checkear()
    }
  }
}
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
    eliminar(divnuev)
    lista.appendChild(divnuev);
    ContadorDePalabrasGuardadas = i;
    checkear()
  }
}
boton.addEventListener("click",anadir);
/* Descomentar esto y refrescar para resetear la lista guardada  */
let reset = document.getElementById("reset")
reset.addEventListener("click", function(reset){
    localStorage.clear()
    document.location.reload(true)

})
document.addEventListener("keypress", function(entrar){
  if (entrar.key == "Enter") {
    anadir()
  }
})
/*Codeamos el boton check*/
function checkear(){
function verprimero(){
  let lista =document.getElementById("lista")
  return lista.firstChild
}
function check(check){
  
}
/*Elemento para crear los criculos de chekeo *conocido varios bugs* */
let checks = document.getElementsByClassName("checkeo")
for (let check of checks) {
  check.addEventListener("click", function checkeando (evento){
    console.log(check);
    let elementonuevo = document.createElement("p");
    elementonuevo.innerHTML = check.parentNode.childNodes[1].textContent ;
    console.log("texto elemento"+check.parentNode.childNodes[1].textContent);
    let divnuev = document.createElement("div");
    divnuev.className = "listado";
    let subdiv = creardivcheck();
    subdiv.className="clickado"
    divnuev.appendChild(subdiv);
    subdiv.innerHTML="<div class='letrita'></div>"
    divnuev.appendChild(elementonuevo);
    for (let i = 1; i < 101; i++) {
      if (localStorage.getItem(i)==(check.parentNode.childNodes[1].textContent)) {

      }
    }
    subdiv.addEventListener("contextmenu",function checkneg(checkneg){
      checkneg.preventDefault()
      subdiv.className="checkneg"
      subdiv.innerHTML="<p>X</p>"
    })
    
    check.parentNode.parentNode.removeChild(check.parentNode);
    eliminar(divnuev)
    lista.insertBefore(divnuev,verprimero())
    
  });
  check.addEventListener("contextmenu",function checkneg(checkneg){
    checkneg.preventDefault()
    check.className="checkneg"
    check.innerHTML="<p>X</p>"
  })
}}
/*boton de eliminar*/
function eliminar(div){
  let eliminar = document.createElement("div")
  eliminar.className = "eliminar"
  eliminar.innerHTML="<p>Eliminar</p>"
  div.appendChild(eliminar)
} 
/* Contador para que tarde un segundo en eliminar la tarea y se pueda reporducir la animación */
setInterval(() => {
  let eliminars = document.getElementsByClassName("eliminar")
  for (let eliminar of eliminars) {
    eliminar.addEventListener("click",function(ev){
      eliminar.parentElement.style.transform="scale(0)"
      eliminar.parentElement.style.transition=" all 1s ease-in-out"
      let contador = 1
      console.log("textoewdfefdeaf  "+eliminar.parentElement.innerHTML);
      setInterval(() => {
        if (contador == 0) {
          eliminar.parentElement.parentElement.removeChild(eliminar.parentElement)  
          contador=-1
        }
        }, 1000);
        if(contador>-1){
        contador--}

    })
  }
}, 100);
/*Funcion para añadir boton de eliminar */
function eliminar(div){
  let eliminar = document.createElement("div")
  eliminar.className = "eliminar"
  eliminar.innerHTML="<p>Eliminar</p>"
  div.appendChild(eliminar)
} 
/*Intento de arreglar bug conocido no hacer mucho caso */
setInterval(() => {
  let eliminars = document.getElementsByClassName("checkneg")
  console.log(eliminars.length);

  for (let eliminar of eliminars) {
    function verprimero(){
      let lista =document.getElementById("lista")
      return lista.firstChild
    }
    function check(check){
      
    }
    let checks = document.getElementsByClassName("checkneg")
    for (let check of checks) {
      check.addEventListener("click", function checkeando (evento){
        console.log("CLICKADO");
        let elementonuevo = document.createElement("p");
        elementonuevo.innerHTML = check.parentNode.childNodes[1].textContent ;
        console.log("texto elemento"+check.parentNode.childNodes[1].textContent);
        let divnuev = document.createElement("div");
        divnuev.className = "listado";
        let subdiv = creardivcheck();
        subdiv.className="clickado"
        divnuev.appendChild(subdiv);
        subdiv.innerHTML="<div class='letrita'></div>"
        divnuev.appendChild(elementonuevo);
        for (let i = 1; i < 101; i++) {
          if (localStorage.getItem(i)==(check.parentNode.childNodes[1].textContent)) {
    
          }
        }
        subdiv.addEventListener("contextmenu",function checkneg(checkneg){
          checkneg.preventDefault()
          subdiv.className="checkneg"
          subdiv.innerHTML="<p>X</p>"
        })
        
        check.parentNode.parentNode.removeChild(check.parentNode);
        eliminar(divnuev)
        lista.insertBefore(divnuev,verprimero())
        
      });
      check.addEventListener("contextmenu",function checkneg(checkneg){
        checkneg.preventDefault()
        check.className="checkneg"
        check.innerHTML="<p>X</p>"
      })
    }
  }

}, 500);
