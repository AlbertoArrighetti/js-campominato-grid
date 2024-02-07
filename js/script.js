
// <!-- CONSEGNA  -->

// <!-- L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella,
// la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. -->






















// prelevo il bottone 
const buttonElement = document.querySelector("#generateBtn");
// prelevo la tabella 
const gridElement = document.querySelector("#grid");




// al click genero la tabella 
buttonElement.addEventListener("click", 
    function(){






















    }
)


// -----------------------------------------------------------------------------------------
// FUNZIONI

// funzione che genera un numero random da 1 a un numero deciso da me
function generateRandomNumber(maxNumber) {
    const randomNumber = Math.floor(Math.random() * maxNumber) + 1;
    return randomNumber;
}

// genera un array di numeri della lunghezza che gli indico 
function getRandomNumbersArray(myNumber) {
    // crea l'array 
    const numbersArray = [];

    while (numbersArray.length < myNumber) {

        // inserisci il numero solo se non è già presente
        const newNumber = generateRandomNumber(myNumber);

        // controllo se il numero appena generato è già presente dentro il nostro array
        if( ! numbersArray.includes(newNumber) ) {
            // se non lo è lo inserisco 
            numbersArray.push(newNumber);
        }
    }

    return numbersArray;
}