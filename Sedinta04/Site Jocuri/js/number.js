var randomNumber = Math.floor(Math.random() * 101),
    userNumber = document.getElementById('number'),
    answer = document.getElementById('message'),

    form = document.querySelector('form');

var i = 0,
    maxTries = 0;

    
        form.addEventListener('submit', function(danieprost) {
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

            if(answer !== ' ') {
                answer.innerText = 'Introdu un numar!';
            } else {
                maxTries++;
            }

        danieprost.preventDefault();
        }, false);

        


//maxTries 10 + dificultate 15/20 tries + button Reset.