var arr = [{
    name: 'Larry'
}, {
    name: 'Steven'
}, {
    name: 'Carol'
}, {
    name: 'Andra'
}, {
    name: 'Anita'
}, {
    name: 'Dragos'
}, {
    name: 'Cosmin'
}];

// Larry, Steven, Carol si Cosmin.

var string = '',
    length = arr.length,
    i = 0;

    for (i = 0; i < length; i++) {

        string += arr[i].name;

    if (i < length - 2) {
        string += ', ';
    } else if (i === length - 2) {
        string += ' si ' ;
    }
}

string += '.';
console.log(string);