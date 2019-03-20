var person = {
    name: 'Dragos',
    surname: 'Iordache',
    age: 32,
    petOwner: false,
    skills: ['html', 'javaScript', 'css', 'java', 'c++', 'node', 'jquery'],
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

for (i = 0; i <= person.skills.length - 1; i++){
    if (person.skills[i].includes('j') === false){
        console.log(person.skills[i]);
    }
};

for (i = -1; i <= person.friends.length - 1; i++){
    if(i === -1){
    console.log('Prietenii mei se numesc ');
    } else {
        console.log(person.friends[i].name + ' ' + person.friends[i].surname);
    }
};

var allAge = 0;
    allbirthYear = 0;

for(i = 0; i <= person.friends.length - 1; i++){
    allAge += person.friends[i].age; 
};

console.log(allAge);


for(i = 0; i <= person.friends.length - 1; i++){
    allbirthYear += (2019 - person.friends[i].age);
};

console.log(allbirthYear);

for(i = 0; i <= person.friends.length - 1; i++){
    console.log('Intre ' + person.name + ' si ' + person.friends[i].name + ' este o diferenta de ' + (person.age - person.friends[i].age) + ' ani.');
};

for(i = person.skills.length - 1; i >= 0; i--){
    console.log(person.skills[i]);
}