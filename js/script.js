
var cognomeUtente = prompt("Scrivi il tuo cognome");
var cognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
cognomi.push(cognomeUtente);
cognomi.sort();
var listaHTML = "";
for (var x = 0; x < cognomi.length; x++) {
    listaHTML += "<li>" + cognomi[x] + "</li>";
}
document.getElementsByClassName("surname")[0].innerHTML = listaHTML;
var listaNumerata = cognomi.indexOf(cognomeUtente);
console.log(listaNumerata + 1);
