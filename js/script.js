// prelevo il bottone 
const buttonElement = document.querySelector("#generateBtn");
// prelevo la tabella 
const gridElement = document.querySelector("#grid");


// prelevo l'elemento con le varie difficoltà
let selectedElement = document.getElementById("mySelect");


// al click genero la tabella 
buttonElement.addEventListener("click", 
    function(){

        // ogni volta che si preme il btn si elimina la griglia precedente
        gridElement.innerHTML = "";
        

        // se è la prima difficoltà allora genera una griglia 10 x 10 
        // - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
        if (selectedElement.value == "1"){

            const gridNumber = getRandomNumbersArray(100);


            for (let i = 0; i < 100; i++) {

                // creo un elemento con la classe my_square
                const newSquare = document.createElement("div");
                newSquare.classList.add("my_square", "my_square_ten");

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

        // - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
        }else if (selectedElement.value == "2"){

            const gridNumber = getRandomNumbersArray(81);


            for (let i = 0; i < 81; i++) {

                // creo un elemento con la classe my_square
                const newSquare = document.createElement("div");
                newSquare.classList.add("my_square", "my_square_nine");

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

        // - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
        }else if (selectedElement.value == "3"){

            const gridNumber = getRandomNumbersArray(49);


            for (let i = 0; i < 49; i++) {

                // creo un elemento con la classe my_square
                const newSquare = document.createElement("div");
                newSquare.classList.add("my_square", "my_square_seven");

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
        }else{
            alert("Seleziona una difficoltà")
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
