// 6 - Genera un array di 50 numeri random. Nell’array non devono esserci doppioni.

// VARIABILI
let numbRand = [];
let numeroGenerato = 0;


// MENTRE STA CERCANDO 50 NUMERI
while(numbRand.length < 50) {
    let numeroGenerato = Math.floor(Math.random() * 100) + 1;
    let notDuplicated = true;
    
    //CONTROLLO SE NON CI SONO DUPLICATI TRAMITE CONDIZIONE 
    for (i = 0; i < numbRand.length; i ++) {
        if (numeroGenerato === numbRand[i]) {
            notDuplicated = false;
        }
    }

    // SE NON CI SONO DUPLICATI LO AGGIUNGO ALL'ARRAY
    if(notDuplicated){
        numbRand.push(numeroGenerato)
    }
}

console.log(numbRand);




