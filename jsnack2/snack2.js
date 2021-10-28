// 2- L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

let par1 = prompt("Inserisci qui una parola a caso");
let par2 = prompt("Inserisci un'altra parola a caso");

if (par1 > par2) {
    console.log("La parola generata è: " + par1 + par2);
}else if (par1 < par2) {
    console.log("la parola generata è: " + par2 + par1);
}else if (par1 === par2) {
    alert("Le parole sono della stessa lunghezza")
}

