var person = {
    firstName: 'Alex',
    lastName: 'Hideg',
    email: 'email@email.com',
    birthYear: 2002,
    pets: [
    {
        name: 'Scrappy Coco',
        species: 'dog',
        age: 7
    }, {
        name: 'Shell Shock',
        species: 'turtle',
        age: 95
    }, {
        name: 'Kitty Cat',
        species: 'cat',
        age: 3
    }],
    zipCode: 111111
};

console.log('Numele meu este: ' + person.firstName + ' ' + person.lastName + ' si am ' + person.pets.length + ' animale.' );
console.log('Am acelasi email din copilarie: ' + person.email + '.');
console.log('Unul dintre cele ' + person.pets.length + ' animale pe care le am este ' + person.pets[1].species + ' si are ' + person.pets[1].age + ' ani.');
console.log(person.pets[2].name + ' s-a nascut in anul ' + (2019 - person.pets[2].age) + '.');

var diffrence = (2019 - person.birthYear) - person.pets[2].age,
    pet1 = person.pets[0].name,
    pet2 = person.pets[1].name,
    pet3 = person.pets[2].name;

console.log('Intre ' + person.firstName + ' si ' + pet1 + ' este o diferenta de ' + diffrence + ' ani.');

var liFirst = document.getElementById('prop1'),
    liSecond = document.getElementById('prop2'),
    liThird = document.getElementById('prop3'),
    liFourth = document.getElementById('prop4');

    liFirst.innerText = person.firstName + ', ' + pet1 + ', ' + pet2 + ' si ' + pet3 + ' locuiesc toti ' + (person.pets.length + 1) +' in aceeasi casa.';
    liSecond.innerText = 'Diferenta de varsta dintre ' + pet1 + ' si ' + pet3 + ' este de ' + (person.pets[0].age - person.pets[2].age) + ' ani.';
    liThird.innerText = 'Ma numesc ' + person.firstName + ' ' + person.lastName + ', m-am nascut in ' + person.birthYear + ' si codul meu postal este: ' + person.zipCode + '.';
    liFourth.innerText = 'Animalele mele s-au nascut in ' + (2019 - person.pets[0].age) + ', ' + (2019 - person.pets[1].age) + ', respectiv ' + (2019 - person.pets[2].age) + '.'; 