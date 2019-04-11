var button = document.getElementById('clicker'),
    buttonRemove = document.getElementById('remove');

const clickHandler = () => {
    alert('Ai apasat butonul!');
}

button.addEventListener('click', clickHandler);
buttonRemove.addEventListener('click', function() {
    button.removeEventListener('click', clickHandler);
});