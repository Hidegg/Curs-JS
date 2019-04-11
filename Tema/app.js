const calculateRectangleArea = (L, l) => {
    return L * l;
};
const calculateSquareArea = l => {
    return calculateRectangleArea(l, l);
};

console.log(calculateRectangleArea(4, 3));
console.log(calculateSquareArea(5));

console.log('****************');

var person = {
    getName: function() {
        return 'Dragos Iordache';
    },
    getAge: function() {
        return 32;
    }
}

console.log(person.getName());
console.log(person.getAge());
console.log(2019 - person.getAge());
var x = 'Ma numesc ' + person.getName() + ' si am ' + person.getAge();

    if(person.getAge() < 20) {
        x += ' ani.'
    } else {
        x += ' de ani.'
    }
console.log(x);

console.log('****************');

const calculateCircleArea = (r) => {
    return (Math.PI * Math.pow(r, 2)).toFixed(2);
};

console.log(calculateCircleArea(2));
console.log(calculateCircleArea(20));
console.log(calculateCircleArea(16));



