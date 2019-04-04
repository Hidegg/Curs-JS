var person = {
    name: 'Dragos',
    surname: 'Iordache',
    age: 32,
    petOwner: false,
    skills: {
        html: true,
        css: true,
        javaScript: true
    },
    friends:{
        larry: {
            name: 'Larry',
            surname: 'Larryson',
            age: 30
        },
        steven: {
            name: 'Steven',
            surname: 'Stevenson',
            age: 31
        },
        carol: {
            name: 'Carol',
            surname: 'Carolson',
            age: 29
        }
    }
};

console.log(Object.keys(person));
console.log(Object.keys(person.skills));

console.log('-----------------');

var prop = 'Stiu ';

Object.keys(person.skills).forEach(function (skill){
    prop += skill + ' ';
});

console.log(prop);

console.log('-----------------');

var myFriends = 'Prietenii mei sunt '; 

Object.keys(person.friends).forEach(function (name, index, array){
        myFriends += person.friends[name].name + ' ';
        if(array.length - 2 === index){
            myFriends += 'si ';
        }
});

console.log(myFriends + '.')

console.log('-----------------');

Object.keys(person.friends).forEach(function (friend){
    if(person.age > person.friends[friend].age){
        console.log('Dragos este mai mare decat ' + person.friends[friend].name + '.');
    }
    else if (person.age < person.friends[friend].age) {
        console.log('Dragos este mai mic decat ' + person.friends[friend].name + '.');
    } else {
        console.log('Dragos si ' + person.friends[friend].name + ' au aceeasi varsta.');
    }


});