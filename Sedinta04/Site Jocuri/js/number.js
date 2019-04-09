var randomNumber = Math.floor(Math.random() * 101),
    userNumber = document.getElementById('number'),
    answer = document.getElementById('message'),
    reset = document.getElementById('playagain'),
    difficultyButtons = document.querySelectorAll('.try'),
    userTries = document.getElementById('tries'),
    form = document.querySelector('form');

var i = 0,
    maxTries = 0,
    tries = 0,
    userTry = 0;


    difficultyButtons.forEach(function(button){
        button.addEventListener('click', function() {
            maxTries = parseInt(this.id);
            userNumber.disabled = false;
            answer.innerHTML = ' ';
        });        
    });

    if(maxTries === 0){
        answer.innerHTML = 'Alege un numar de incercari!';
        userNumber.disabled = true;
    }

    form.addEventListener('submit', function(e){

        var userNumberValue = parseInt(userNumber.value),
            x = 'Ai ghicit! Numarul era ' + userNumberValue + '.';

        if(userNumberValue > 100 || userNumberValue < 0){
            answer.innerText = "Numarul trebuie sa fie cuprins intre 1 si 100!";
        } else if(randomNumber !== userNumberValue){
                if(randomNumber > userNumberValue){
                    answer.innerText = 'Numarul e prea mic.';
                }
                if(randomNumber < userNumberValue){
                    answer.innerText = 'Numarul e prea mare.';
                }
            }
            
        if(randomNumber === userNumberValue){
            answer.innerText = x;
        }
            tries++;
        
            userNumber.value = ' ';

        if(tries <= maxTries && answer.value === x) {
            answer.innerHTML = 'You Won';
            userNumber.disabled = true;
        } else if(tries > maxTries) {
            answer.innerHTML = 'You Lost!';
            userNumber.disabled = true;
        }
        if(tries === 0){
            userTry = maxTries;
        }
            userTries.innerText = 'Incercari ramase ' + (maxTries + userTry) + '.';
            userTry--;

    e.preventDefault();
    }, false);

//maxTries 10 + dificultate 15/20 tries + button Reset.