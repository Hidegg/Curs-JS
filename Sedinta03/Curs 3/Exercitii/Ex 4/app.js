var person = {
    name: 'Hideg',
    surname: 'Alexandru',
    age:17,
    petOwner: false,
    skills: ['html', 'javaScript', 'css'],
    friends: [{
        name: 'Larry',
        surname: 'Larryson',
        age:30
    }, {
        name: 'Steven',
        surname: 'Stevenson',
        age:31
    }, {
        name: 'Carol',
        surname: 'Carolson',
        age:29
    }]
};

console.log(person.friends);
console.log('Ma numesc ' + person.name + ' ' + person.surname + 'si stiu ' + person.skills[0] + ' si ' + person.skills[2] + '.');
console.log('Sunt ' + person.name + ' ' + person.surname + ' si acum invat ' + person.skills[1] + '.');
console.log('Am ' + person.friends.length + ' prieteni: ' + person.friends[0].name + ' ' + person.friends[1].name + ' ' + person.friends[2].name + '.');