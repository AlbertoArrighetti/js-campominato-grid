
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

        // per le 100 
        const gridNumber = getRandomNumbersArray(100);
        // al click aggiungo anche una classe alla griglia 
        gridElement.classList.add("grid_ten");


        for (let i = 0; i < 100; i++) {
            // creo un elemento con la classe my_square
            const newSquare = document.createElement("div");
            newSquare.classList.add("my_square" , "square_ten");

            // gli inserisco il numero da 1 a 100 
            newSquare.innerText = gridNumber[i];


            // al click di questa casella aggiungi o rimuovi una classe 
            newSquare.addEventListener("click",
                function() {
                    this.classList.add("active_square");

                    // in console 
                    console.log(this)

                }
            )


            // lo inserisco nella griglia 
            gridElement.append(newSquare);




        }
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