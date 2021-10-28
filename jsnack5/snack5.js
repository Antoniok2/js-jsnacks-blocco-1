// 5 - Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.


// ARRAY VUOTA
let numeri = [];
// CHIEDO ALL'UTENTE UN NUMERO CASUALE
for (let i=0; i<6; i++) {
    let numeroUser = parseInt(prompt("Inserisci qui un numero casuale"));

    if (numeroUser % 2 !== 0 ) {
        numeri.push(numeroUser);
    }
}

console.log(numeri);






