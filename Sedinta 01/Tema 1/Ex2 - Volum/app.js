var inputWidth = document.getElementById('width'),
    inputHeight = document.getElementById('height'),
    inputDepth = document.getElementById('depth'),
    elementResult = document.getElementById('result'),
    form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    var width = inputWidth.value || 0,
        height = inputHeight.value || 0,
        depth = inputDepth.value || 0,
        result = 0;
    
    result = width * depth * height;

    elementResult.innerText = result;

e.preventDefault();
}, false);