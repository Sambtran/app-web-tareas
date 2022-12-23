let operadoresaux = document.getElementById("operadores");
let operadores = operadoresaux.getElementsByTagName("div");
let suma = document.getElementById("suma");
let res = document.getElementById("res");
let mult = document.getElementById("mult");
let div = document.getElementById("div");
let ig = document.getElementById("ig");
let entrada = document.getElementById("numero");
let numant = document.getElementById("numant");
let resetear = document.getElementById("resetear");
console.log(entrada);
/*Declaracion de operadores */
let num3;
let num2;
let num1;
let centinela = false;
/*Almacenamos todos los numeros que esta operando antes de que aprete el igual */
let numerosesionactual = [];
resetear.addEventListener("click", function(ev){
    document.location.reload(true)
})
function pasaracache() {
  console.log("pasarcache");
  num2 = num1
  num1 = entrada.value;
}
function borrarnumero() {
  entrada.value = "";
}
function pasarnumero(opaux) {
  if(entrada.value != ""){
  console.log("pasarnumero");
  let numnuevo = document.createElement("p");
  numnuevo.innerHTML = `   ${entrada.value} &nbsp ${opaux}`;
  numerosesionactual.push([opaux,entrada.value]);
  numant.appendChild(numnuevo);}
  else{
  }
}
let opaux;
let vecesapretado = 0;
let resultado;
for (let operador of operadores) {
  operador.addEventListener("click", function () {
    if (operador.textContent == "+") {
      opaux = "+";
      vecesapretado++;
      console.log(vecesapretado);
      switch (vecesapretado) {
        case 1:
          console.log("entra1");
          pasarnumero(opaux);
          pasaracache();
          borrarnumero();
          break;

        case 2:
          console.log("entra 2");
          pasarnumero(opaux);
          pasaracache();
          num1 = parseFloat(num1);
          num2 = parseFloat(num2);
          console.log(num1 + num2);
          resultado = num1 + num2;
          entrada.value = resultado;
          break;
        case 3:
          console.log("entra 3");
          pasarnumero(opaux);
          pasaracache();
          borrarnumero();
          vecesapretado = 1;
          break;
      }
    }
    if (operador.textContent == "-") {
      opaux = "-";
      vecesapretado++;
      switch (vecesapretado) {
        case 1:
          console.log("entra1");
          pasarnumero(opaux);
          pasaracache();
          borrarnumero();
          break;

        case 2:
          console.log("entra 2");
          pasarnumero(opaux);
          pasaracache();
          console.log(num1 + num2);
          num1 = parseFloat(num1);
          num2 = parseFloat(num2);
          resultado = num1 - num2;
          entrada.value = resultado;
          break;
        case 3:
          console.log("entra 3");
          pasarnumero(opaux);
          pasaracache();
          borrarnumero();
          vecesapretado = 1;
              }
    }
    if (operador.textContent == "x") {
      opaux = "x";
      vecesapretado++;
      switch (vecesapretado) {
        case 1:
          console.log("entra1");
          pasarnumero(opaux);
          pasaracache();
          borrarnumero();
          break;

        case 2:
          console.log("entra 2");
          pasarnumero(opaux);
          pasaracache();
          console.log(num1 + num2);
          num1 = parseFloat(num1);
          num2 = parseFloat(num2);
          resultado = num1 * num2;
          entrada.value = resultado;
          break;
        case 3:
          console.log("entra 3");
          pasarnumero(opaux);
          pasaracache();
          borrarnumero();
          vecesapretado = 1;
      }
    }
    if (operador.textContent == "/") {
      opaux = "/";
      vecesapretado++;
      switch (vecesapretado) {
        case 1:
          console.log("entra1");
          pasarnumero(opaux);
          pasaracache();
          borrarnumero();
          break;

        case 2:
          console.log("entra 2");
          pasarnumero(opaux);
          pasaracache();
          console.log(num1 + num2);
          num1 = parseFloat(num1);
          num2 = parseFloat(num2);
          resultado = num1 / num2;
          entrada.value = resultado;
          break;
        case 3:
          console.log("entra 3");
          pasarnumero(opaux);
          pasaracache();
          borrarnumero();
          vecesapretado = 1;
          break
      }
    }
    if (operador.textContent == "=") {
      vecesapretado++;
      console.log("igual   "+vecesapretado);
      switch (vecesapretado) {
        case 1:
          vecesapretado = 0;
          break;
        default:
          if(numerosesionactual.length>2){
            igualadora();
            resetparcial()

          }
          else{
          switch (opaux) {
            case "+":
              num1 = parseFloat(num1);
              num3 = parseFloat(entrada.value);
              res.textContent = num3 + num1;
              resetparcial()
              break;
            case "-":
              num1 = parseFloat(num1);
              num3 = parseFloat(entrada.value);
              res.textContent = num3 - num1;
              resetparcial()
              break;
            case "/":
              num1 = parseFloat(num1);
              num3 = parseFloat(entrada.value);
              res.textContent = num3 / num1;
              resetparcial()
              break;
            case "x":
                num1 = parseFloat(num1);
                num3 = parseFloat(entrada.value);
                res.textContent= num3*num1
                resetparcial()
                break
          }}
      }
      opaux = "=";
      //res.textContent=
    }
  });
}
setInterval(() => {
    console.log(numerosesionactual);
    console.log("entrada= "+entrada.value+"  numero 1  "+num1+"  numero 2 "+num2+"  numero 3 "+num3);
          }, 5000);

function igualadora(){
  let resultadofinal=0 
  let resaux=0
  let resaux2=0
  for (let pack of numerosesionactual) {
    switch (pack[0]) {
      case "+":
        resaux2 += parseFloat(pack[1])
        break;
      default:
        break;
    }
  }
  console.log(resaux2);
  res.textContent=resaux2
  vecesapretado=0
}
function resetparcial(){
  vecesapretado=0;
  pasaracache()
  borrarnumero()
  numant.innerHTML=""
}