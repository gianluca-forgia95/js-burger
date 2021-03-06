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
//Definisco la variabile per lo sconto
var discountCoupon = document.getElementById('sconto-input');
//Creo l'array con i codici sconto
var codiciSconto = ['asroma1927', '123987', 'spotify657'];
//Definisco variabile per il totale
var total = document.getElementById('totale');
//Inizializzo l'evento
calc.addEventListener("click",
function() {
  //Controllo se il nome è stato inserito e metto le condizioni
  if ( burgerName.value != "") {
    //Definisco il ciclo degli ingredienti
    var somma = 50;
    for (var i = 0; i < ingredientiPanino.length; i++) {
    //Stabilisco le condizioni
      if ( ingredientiPanino[i].checked == true ) {
        somma = somma + parseInt( ingredientiPanino[i].value );
      }

     //applico lo sconto alla somma
     if ( codiciSconto.includes(discountCoupon.value) ) {
       somma -= somma / 100 * 20;
     }

   }//stampo il risultato nella pagina
     total.innerHTML = somma.toFixed(2) + ' $';
  } else {
    alert('Inserisci il nome del panino');
  }
}

);
