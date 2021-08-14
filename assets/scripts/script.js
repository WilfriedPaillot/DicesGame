// Variables declaration
roundScore = 0;
globalScore = 0;

// New game function
const newGame = document.getElementById('newGame').addEventListener('click', () => {
    window.location.reload();
})

// Roll dice function with roundScore's increment 

const roll = document.getElementById('roll').addEventListener('click', () => {
    const diceValue = Math.ceil(Math.random() * 6);

    if (diceValue > 1) {
        roundScore += diceValue;
    }
    else {
        roundScore = 0;
        // + next player
    }
    document.getElementById("roundScore").innerHTML = roundScore;
})

// Hold function with globalScore's increment

const hold = document.getElementById('hold').addEventListener('click', () => {
    //globalScore += roundScore;
    document.getElementById("globalScore").innerHTML = globalScore += roundScore;
    roundScore = 0;
})

// Change player's functions with reset roundScore

