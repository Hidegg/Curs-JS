var randomNumber = Math.floor(Math.random() * 101),
    userNumber = document.getElementById('number'),
    answer = document.getElementById('message'),
    form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    var userNumberValue = parseInt(userNumber.value);

    if(randomNumber === userNumberValue){
        answer.innerText = 'Ai ghicit! Numarul era ' + userNumberValue + '.';
    }
    if(randomNumber > userNumberValue){
        answer.innerText = 'Numarul e prea mic.';
    }
    if(randomNumber < userNumberValue){
        answer.innerText = 'Numarul e prea mare.';
    }

e.preventDefault();
}, false);


//maxTries 10 + dificultate 15/20 tries + button Reset.
