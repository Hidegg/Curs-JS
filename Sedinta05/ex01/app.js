console.log(
    (new Date()).getHours() + ':' +
    (new Date()).getMinutes() + ':' +
    (new Date()).getSeconds() + ':' +
    (new Date()).getMilliseconds(),
    'Am ajuns la Pixellab'
);

var exactTime = new Date().getHours();

function getTime() {
    return new Date().getHours();
}
console.log(getTime());