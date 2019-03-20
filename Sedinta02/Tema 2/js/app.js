var form = document.querySelector('form');
    nameInput = document.getElementById('nameInput'),
    passInput = document.getElementById('passInput'),
    errorPass = document.getElementById('error'),
    nameError = document.getElementById('errorName'),
    passRepeatInput = document.getElementById('passRepeatInput');
    
form.addEventListener('submit' , function(e) {
    console.log(nameInput.value);
    var passValue = passInput.value,
        passRepeatValue = passRepeatInput.value,
        nameValue = nameInput.value;


    if(passValue === passRepeatValue){
        console.log('Numele este: ' + nameValue + ' cu parola: ' + passValue + '.');
    } else {
        alert('Parolele nu sunt egale.');
    }
    if(nameValue == null || nameValue == ""){
        errorName = 'Numele nu poate ramane necompletat.';
        nameError.innerText = errorName;
    } else if(nameValue != null || nameValue != ""){
        errorName = 'Nume Valabil!';
        nameError.innerText = errorName;
    }
    if(passValue.length < 8 || passValue.length > 25){
        error = 'Parola trebuie sa aiba intre 8 si 25 de caractere.';
        errorPass.innerText = error;
    } else if(passValue.length > 8 || passValue.length < 25){
        error = 'Parola Valabila!';
        errorPass.innerText = error;
    }
    e.preventDefault();
});