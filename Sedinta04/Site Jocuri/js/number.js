var randomNumber = Math.floor(Math.random() * 101),
    userNumber = document.getElementById('number'),
    answer = document.getElementById('message'),
    form = document.querySelector('form');

var i = 0,
    maxTries = 0;

    function add(){
        maxTries += 1;
    }
    
        form.addEventListener('submit', function(e) {
            var userNumberValue = parseInt(userNumber.value);

            if(randomNumber !== userNumberValue){
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

            add();
        e.preventDefault();
        return maxTries += 1;
        }, false);



//maxTries 10 + dificultate 15/20 tries + button Reset.
