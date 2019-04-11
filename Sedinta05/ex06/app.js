var person = {
    getName: function() {
        return 'Dragos Iordache';
    },
    getAge: function() {
        return 32;
    }
};

function accessor(methodSuffix) {
    var methodName = 'get' + methodSuffix;
    return person[methodName]();
}

var currentYear = new Date().getFullYear();

console.log(accessor('Name'));
console.log('*********************');
console.log(accessor('Age'));
console.log('*********************');
console.log(currentYear - accessor('Age'));
console.log('*********************');
var x = 'Ma numesc ' + accessor('Name') + ' si am ' + accessor('Age');

    if(accessor('Age') < 20) {
        x += ' ani!'
    } else {
        x += ' de ani!'
    }
console.log(x);