var dateBuilder = [
    function () {
        return '2019';
    },
    function () {
        return 'Februarie';
    }, 
    function () {
        return '24';
    }
];

console.log(dateBuilder);

dateBuilder [3] = function () {
    return 'Duminica';
};

console.log(dateBuilder);

console.log(dateBuilder[0]());
console.log('***************');
console.log('Suntem in ' + dateBuilder[1]() + ' ' + dateBuilder[0]() + '.');
console.log('***************');
console.log('Astazi este ' + dateBuilder[2]() + ', ' + dateBuilder[1]() + '.');
console.log('***************');
console.log('Data curenta este ' + dateBuilder[2]() + ' ' + dateBuilder[1]() + ' ' + dateBuilder[0]() + ', ' + dateBuilder[3]() + '.');