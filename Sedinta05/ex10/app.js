
function calculateSurface(L, l, h){
    var x = 0;
    switch(arguments.length) {
        case 1:
            return Math.pow(L, 2);
        case 2:
            return l * L;
        case 3:
            return  2 * (L * l + L * h + h * l);;
    }
}

console.log(calculateSurface(5));
console.log(calculateSurface(5, 10));
console.log(calculateSurface(5, 10, 15));

console.log('******************');

const pet = {
    getName: function(){
        return 'Scrapy Coco';
    },
    getSpecies: function(){
        return 'caine';
    },
    getAge: function(){
        return '4';
    }
};

console.log(pet['getName']() + ' este ' + pet['getSpecies']() + ' si are ' + pet['getAge']() + ' ani.');

console.log('********************');

var petAge = pet['getAge']();

console.log('Animalul meu are ' + petAge + ' ani.');

console.log('********************');