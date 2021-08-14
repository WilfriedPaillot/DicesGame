// Variables declaration
roundScore = 0;

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
    console.log(roundScore);
})

// Hold function with globalScore's increment


// Change player's functions with reset roundScore

