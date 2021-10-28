// 6 - Genera un array di 50 numeri random. Nell’array non devono esserci doppioni.

let numbRand = [];
let numeroGenerato = 0;


// for (let i = 0; i < 10; i++) {
//     numeroGenerato = Math.floor(Math.random() * 20) + 1;

//     if (numbRand[i] !== numeroGenerato) {
//         found = true;
//         numbRand.push(numeroGenerato)
//     }
// }

// console.log(numbRand);

while(numbRand.length < 50) {
    let numeroGenerato = Math.floor(Math.random() * 100) + 1;
    let notDuplicated = true;

    for (i = 0; i < numbRand.length; i ++) {
        if (numeroGenerato === numbRand[i]) {
            notDuplicated = false;
        }
    }

    if(notDuplicated){
        numbRand.push(numeroGenerato)
    }
}

console.log(numbRand);




