// Variables declaration
let roundScore1 = 0;
let roundScore2 = 0;
let globalScore1 = 0;
let globalScore2 = 0;
let firstPlayer;
let activePlayer = firstPlayer;

// New game function
const newGame = document.getElementById('newGame').addEventListener('click', () => {
    const randomActivePlayer = Math.ceil(Math.random()*2);
    const firstPlayer = randomActivePlayer === 1 ? 1 : 2;
    // const activePlayer = randomActivePlayer === 1 ? 1 : 2;
     if (firstPlayer === 1 ) {
         document.getElementById('player1').classList.add('actived');
         document.getElementById('player2').classList.remove('actived');
     }
     else {
         document.getElementById('player1').classList.remove('actived');
         document.getElementById('player2').classList.add('actived');
     }
})

// Roll dice function with roundScore's increment 

const roll = document.getElementById('roll').addEventListener('click', () => {
    const diceValue = Math.ceil(Math.random() * 6);

    if (diceValue > 1) {
        
        if (activePlayer === 1 ) {
            roundScore1 += diceValue;
            document.getElementById("roundScore1").innerHTML = roundScore1;
        }
        else {
            roundScore2 += diceValue;
            document.getElementById("roundScore2").innerHTML = roundScore2;
        }
    }
    else {
    
        if (activePlayer === 1 ) {
            roundScore1  = 0;
            document.getElementById("roundScore1").innerHTML = roundScore1;
            nextPlayer();
        }
        else {
            roundScore2 = 0;
            document.getElementById("roundScore2").innerHTML = roundScore2;
            nextPlayer();
        }}

    console.log(activePlayer);
    console.log(diceValue);
    console.log(roundScore1);
    console.log(roundScore2);

})

// Hold function with globalScore's increment

const hold = document.getElementById('hold').addEventListener('click', () => {
    document.getElementById("globalScore1").innerHTML = globalScore1 += roundScore1;
    document.getElementById("globalScore2").innerHTML = globalScore2 += roundScore2;
    document.getElementById("roundScore1").innerHTML = roundScore1 = 0;
    document.getElementById("roundScore2").innerHTML = roundScore2 = 0;
    nextPlayer();
})

// Function to change player's variables
function nextPlayer() {
    activePlayer = activePlayer === 1 ? 2 : 1;
}

