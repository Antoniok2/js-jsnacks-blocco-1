// 1 - L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

// CHIEDO ALL'UTENTE DI INSERIRE 2 NUMERI
let firstNumb = parseInt(prompt("inseirsci qui il primo numero"));
let secondNumb = parseInt(prompt("Inserisci qui il secondo numero"));

console.log(firstNumb);
console.log(secondNumb);

// STAMPO ALL'UTENTE IL NUMERO MAGGIORE
if (firstNumb > secondNumb) {
    alert(`Il numero maggiore è ${firstNumb}`);
}else if (firstNumb < secondNumb) {
    alert("Il numero maggiore è: " + secondNumb);
}