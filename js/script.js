
var cognomeUtente = prompt("Scrivi il tuo cognome");
var cognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
cognomi.push(cognomeUtente);
cognomi.sort();
var htmlString = "<ul>";
for (var i = 0; i < cognomi.length; i++) {
    htmlString += "<li>" + cognomi[i] + "</li>";
}
htmlString += "</ul>";
document.getElementById("surname").innerHTML = htmlString;
var listaNumerata = cognomi.indexOf(cognomeUtente);
console.log(listaNumerata + 1);

