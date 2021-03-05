/* Js Burger
Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti.

*/

//Creo variabili
var calc = document.getElementById('button-calc');
console.log(calc);
var burgerName = document.getElementById('burger-name');
console.log(burgerName);

calc.addEventListener("click",
function() {
  //Controllo se il nome è stato inserito
  if ( burgerName.value != "") {
    console.log( burgerName.value );
  } else {
    alert('Inserisci il nome del panino');
  }
}

);
