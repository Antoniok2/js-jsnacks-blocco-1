// 4 - In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.


const nomeInvitati = ["Giuseppe", "Giovanni", "Simone", "Antonino", "Loris", "Adriano"];
let NomeUtente = prompt("Ciao, gentilmente indica qui il tuo nome");

let valoreUtente = false;

for (let i = 0; i < nomeInvitati.length; i++) {
    if (NomeUtente === nomeInvitati[i]) {
        valoreUtente = true;
        alert("Benvenuto, puoi entrare alla mitica festa " + nomeInvitati[i]);
    } else if (NomeUtente !== nomeInvitati) {
        valoreUtente === NomeUtente;
        console.log("Mi dispiace ma non sei stato invitato");
    }


}
