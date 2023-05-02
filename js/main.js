/* 
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. 
*/


const container = document.getElementById ("container");

for (let i = 1; i <= 100; i++) {

    // creazione nuovo elemento

    const quadrato = document.createElement ('span')
    
    // ciclo sequenza numerica
    let number = i;

    if (i%3==0 && i%5==0) {
        //stampa fizzbuzz
        number = "fizzbuzz";

        // background
        quadrato.style.background = '#f0466f';

    } 
    else if (i%3==0) {
        // stampa fizz
        number = "fizz";

        // background
        quadrato.style.background = '#0cd6a1';

    }
    else if (i%5==0) {
        // stampa buzz
        number = "buzz";

        // background
        quadrato.style.background = '#ffd166';

    }

    quadrato.append(number);

    quadrato.classList.add("square");

    contenitore.append(quadrato);

    // console.log(number);

}