function rollDice(){
    var dice1 = document.getElementById("dice1"),
        dice2 = document.getElementById("dice2"),
        status = document.getElementById("status"),
        d1 = Math.floor(Math.random() * 6 ) + 1,
        d2 = Math.floor(Math.random() * 6) + 1,
        diceTotal = d1 + d2;
        dice1.innerHTML = d1;
        dice2.innerHTML = d2;
        status.innerHTML = 'You rolled ' + diceTotal + '.'; 
        if(d1 === d2) {
            status.innerHTML += ' DOUBLES!'
        }
}