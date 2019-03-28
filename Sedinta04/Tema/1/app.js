var person = {
    firstName: 'Dragos',
    lastName: 'Iordache',
    birthYear: 1987, 
    pets: [{
      name: 'Twix',
      species: 'papagal',
      age: 4
    }, {
      name: 'Mars',
      species: 'caine',
      age: 2, 
    }, {
      name: 'Bounty',
      species: 'hamster',
      age: 4
    }, {
      name: 'Lion',
      species: 'pisica',
      age: 10
    }]
  };

let i = 0,
    sum = 0,
    age = (2019 - person.birthYear),
    dif = 0,
    length = person.pets.length,
    arr = person.pets;

for (; i < length; i++) {
    sum += person.pets[i].age;
}
console.log('Suma anilor animalelor este ' + sum + '.');


for (i = 0; i < length; i++) {
    dif = age - person.pets[i].age;
    console.log('Intre ' + person.firstName + ' si ' + person.pets[i].name + ' este o diferenta de ' + dif + ' ani.')
}
