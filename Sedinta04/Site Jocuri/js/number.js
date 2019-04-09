var randomNumber = Math.floor(Math.random() * 101),
    userNumber = document.getElementById('number'),
    answer = document.getElementById('message'),
    reset = document.getElementById('playagain').style.display = "inline";
    form = document.querySelector('form');

var i = 0,
    maxTries = 0;

    
        form.addEventListener('submit', function(e){
            var userNumberValue = parseInt(userNumber.value);

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
                answer.innerText = 'Ai ghicit! Numarul era ' + userNumberValue + '.';
            }

                maxTries++;

        e.preventDefault();
        }, false);

        if(maxTries === 5){
            window.prompt;
        }


//maxTries 10 + dificultate 15/20 tries + button Reset.