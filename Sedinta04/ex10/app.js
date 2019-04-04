var person = {
    name: 'Dragos',
    surname: 'Iordache',
    age: 32,
    petOwner: false,
    skills: ['html', 'javascript', 'css', 'c++', 'node', 'jquery'],
    friends:[{
        name: 'Larry',
        surname: 'Larryson',
        age: 30,
    }, {
        name: 'Steven',
        surname: 'Stevenson',
        age: 31,
    }, {
        name: 'Carol',
        surname: 'Carolson',
        age: 29,
    }]
}

person.skills.forEach(function (skill){
    console.log(skill);
});

console.log('----------------------------');

let friendString = 'Prietenii mei se numesc ';

person.friends.forEach(function (friend) {
        friendString += friend.name + ' ' + friend.surname + ', ';
});

friendString = friendString.slice(0, -2);

console.log(friendString + '.');

console.log('----------------------------');

let sum = 0;

person.friends.forEach(function (friendage) {
    sum += friendage.age;
});

console.log('Suma varstelor este' + sum);

console.log('----------------------------');

let birthYears = 0;

person.friends.forEach(function (friendage) {
    birthYears += (2019 - friendage.age);
});

console.log(birthYears);

console.log('----------------------------');

let persAge = person.age;


person.friends.forEach(function (friendAge){
    console.log('Diferenta dintre ' + person.name + ' si ' + friendAge.name + ' este de ' + (persAge - friendAge.age) + '.');
});

console.log('----------------------------');

let skillReverse = 0;
skillReverse = person.skills.reverse();

skillReverse.forEach(function (skill){
    console.log(skill);
});

