var person = {
    name: 'Dragos',
    surname: 'Iordache',
    age: 32,
    petOwner: false,
    skills: ['html', 'javascript', 'css', 'java', 'c++', 'node', 'jquery'],
    friends: [{
        name: 'Larry',
        surname: 'Larryson',
        age: 30
    }, {
        name: 'Steven',
        surname: 'Stevenson',
        age: 31
    }, {
        name: 'Carol',
        surname: 'Carolson',
        age: 29
    }]
};

var i = 0;
    skillsLength = person.skills.length - 1;

for (; i <= skillsLength; i += 1){
    console.log(person.skills[i]);
}

console.log('*****************');

for (i = 0; i <= skillsLength; i += 1){
    if(person.skills[i].startsWi
        ('j') === true){
        continue;
    }
    console.log(person.skills[i]);
}

console.log('*****************');

var friendsName = 'Prietenii mei se numesc',
    friendsAge = 0,
    friendsBirth = 0;


for (i = 0; i < person.friends.length; i += 1){
    friendsName += ' ' + person.friends[i].name + ' ' + person.friends[i].surname;
    if(i === person.friends.length - 1){
        friendsName += '.';
    } else {
        friendsName += ',';
    }
    friendsAge += person.friends[i].age;
    friendsBirth += 2019 - person.friends[i].age;
    console.log('Intre ' + person.name + ' si ' + person.friends[i].name + ' este o diferenta de ' + (person.age - person.friends[i].age) + ' ani.');
}

console.log('*****************');
console.log(friendsName);
console.log('*****************');
console.log(friendsAge);
console.log('*****************');
console.log(friendsBirth);
console.log('*****************');

for (i = skillsLength; i >= 0; i -= 1) {
    console.log(person.skills[i]);
}

console.log('*****************');

