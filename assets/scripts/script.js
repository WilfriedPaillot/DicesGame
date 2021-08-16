// Variables declaration
let roundScore1 = 0;
let roundScore2 = 0;
let globalScore1 = 0;
let globalScore2 = 0;
let activePlayer;

// New game function
const newGame = document.getElementById('newGame').addEventListener('click', () => {

    resetAll();

    activePlayer = Math.ceil(Math.random()*2);

    changePlayerStyle();
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
            changePlayerStyle();
        }
        else {
            roundScore2 = 0;
            document.getElementById("roundScore2").innerHTML = roundScore2;
            nextPlayer();
            changePlayerStyle();
        }}
        document.getElementById("value").innerHTML = diceValue;    
        //console.log(activePlayer);
    })

// Hold function with globalScore's increment

const hold = document.getElementById('hold').addEventListener('click', () => {
    if (activePlayer === 1) {
        document.getElementById("globalScore1").innerHTML = globalScore1 += roundScore1;
        document.getElementById("roundScore1").innerHTML = roundScore1 = 0;
        nextPlayer();
        changePlayerStyle();
    }
    else {
        document.getElementById("globalScore2").innerHTML = globalScore2 += roundScore2;
        document.getElementById("roundScore2").innerHTML = roundScore2 = 0;    
        nextPlayer();
        changePlayerStyle();  
    }
    
})

// Function to change player
function nextPlayer() {
    activePlayer = activePlayer === 1 ? 2 : 1;
}

// Function to reset all variables
function resetAll() {
    document.getElementById("roundScore1").innerHTML = roundScore1 = 0;
    document.getElementById("globalScore1").innerHTML = globalScore1 = 0;
    document.getElementById("roundScore2").innerHTML = roundScore2 = 0;
    document.getElementById("globalScore2").innerHTML = globalScore2 = 0;
}

function changePlayerStyle() {

    if (activePlayer === 1 ) {
        document.getElementById('player1').classList.add('actived');
        document.getElementById('player2').classList.remove('actived');
    }
    else {
        document.getElementById('player1').classList.remove('actived');
        document.getElementById('player2').classList.add('actived');
    }
}