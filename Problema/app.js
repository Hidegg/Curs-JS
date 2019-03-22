var person = {
    name: 'Dragos',
    surname: 'Iordache',
    age: 32,
    petOwner: false,
    skills: ['html', 'javascript', 'css'],
    friends: [{
      name: 'Larry',
      surname: 'Larryson',
      age: 30
    }, {
      name: 'Phteven',
      surname: 'Phtevenson',
      age: 31
    }, {
      name: 'Carol',
      surname: 'Carolson',
      age: 29
    }, {
      name: 'Andra',
      surname: '',
      age: 29
    }]
  };
  
  function addElement(text) {
    var p = document.createElement('p');
  
    p.innerText = text;
    document.body.appendChild(p);
  }
  
  var i = 0,
      j = 0,
      length = person.friends.length,
      friendString = '',
      index1 = 1, 
      index2 = 2,
      aux = 0;
  
  for (i = 0; i < length; i++) {
    j = 0;
    addElement('Sunt ' + person.friends[i].name + ' si acum invat JavaScript.');
    addElement(person.friends[i].name + ' ' + person.friends[i].surname + ' ' + person.friends[i].age);
  
    friendString = 'Ma numesc ' + person.friends[i].name + ' si am ' + (length - 1) + ' prieteni: ';

    for (; j < length; j++) {
          index1 = 1; 
          index2 = 2;

    if (j === i) {
        continue;
    } 

    friendString += person.friends[j].name;
    
    if (i === length - 1 || i === length - 2){
        j++;
    }
    if (j === length){
        friendString += '.';
        continue;
    }
    if (j === length - index1) {
        friendString += '.';
        continue;
      }
    if (j === length - index2) {
        friendString += ' si ';
      } else {
        friendString += ', ';
      }
    if (j >= i) {
        index1 = 2;
        index2 = 3;
    }
    if (i === length - 1 || i === length - 2){
      j--;
    }
    }
    console.log(friendString);
  };
  
  
  
  
  
  // document.write('Ma numesc ' + person.name + ' ' + person.surname + ' si stiu ' + person.skills[0] + ' si ' + person.skills[2] + '.');
  // document.write('<br>Sunt ' + person.friends[1].name + ' si acum invat JavaScript.');
  // document.write('<br>Am ' + person.friends.length + ' prieteni: ' + person.friends[0].name + ', ' + person.friends[1].name + ' si ' + person.friends[2].name + '.');