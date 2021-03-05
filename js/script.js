/* Js Burger
Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti.

*/

//Creo variabili
//Definisco variabile per il bottone di calcolo
var calc = document.getElementById('button-calc');
//Definisco variabile per il nome dell'hamburger
var burgerName = document.getElementById('burger-name');
//Definisco variabile per gli ingredienti del panino
var ingredientiPanino = document.getElementsByClassName('ingredients');
//Definisco variabile per il totale
var total = document.getElementById('totale');

calc.addEventListener("click",
function() {
  //Controllo se il nome è stato inserito e metto le condizioni
  if ( burgerName.value != "") {
    //Definisco il ciclo degli ingredienti
    var somma = 50;
    for (var i = 0; i < ingredientiPanino.length; i++) {

      if ( ingredientiPanino[i].checked == true ) {
        somma = somma + parseInt( ingredientiPanino[i].value );
      }

    }
      console.log(somma);
  } else {
    alert('Inserisci il nome del panino');
  }
}

);
