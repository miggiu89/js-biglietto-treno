
var kmDaPercorrere = prompt('Quanti km devi percorrere?');
var etaPasseggero = prompt('Quanti anni hai?');

var prezzoTratta = kmDaPercorrere * 0.21;

if (etaPasseggero < 18) {
  console.log (prezzoTratta - prezzoTratta * 20 / 100);
} else if (etaPasseggero > 65) {
  console.log(prezzoTratta - prezzoTratta * 40 / 100);
} else {
  console.log (prezzoTratta);
}

document.getElementById("prezzo-tratta").innerHTML = prezzoTratta;

document.getElementById("prezzo-tratta-u18").innerHTML =
(prezzoTratta - prezzoTratta * 20 / 100);
document.getElementById("prezzo-tratta-o65").innerHTML =
(prezzoTratta - prezzoTratta * 40 / 100);

