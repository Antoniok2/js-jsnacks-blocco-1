// 4 - In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.


const nomeInvitati = ["Giuseppe", "Giovanni", "Simone", "Antonino", "Loris", "Adriano"];
let NomeUtente = prompt("Ciao, gentilmente indica qui il tuo nome");

let valoreUtente = false;

// ESECUZIONE ESERCIZIO
// CONDIZIONI E CICLO
for (let i = 0; i < nomeInvitati.length; i++) {
    if (NomeUtente === nomeInvitati[i]) {
        valoreUtente = true;
    }
}

// CONDIZIONI SE EMAIL è CONTENUTA ALL'INTERNO DELL'ARRAY
if (valoreUtente == true) {
    alert("Sei il benvenuto alla festa");
} else {
    alert("Mi dispiace ma non sei invitato alla festa!!!");
}