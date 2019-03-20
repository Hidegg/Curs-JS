var dragos = { 
    name: 'Dragos',
    surname: 'Iordache',
    friends: {} // <= empty object literal
  }; 
  var larry = {
    name: 'Larry',
    surname: 'Larryson',
    friends: {}
  };
  var carol = {
    name: 'Carol',
    surname: 'Carolson',
    friends: {}
  };
  var steven = {
    name: 'Steven',
    surname: 'Stevenson',
    friends: {}
  }
  var anita = {
    name: 'Andra',
    surname: 'Andrason',
    friends: {}
  }
dragos.friends.larry = larry;
dragos.friends.steven = steven;
dragos.friends.anita = anita;

console.log(dragos);
console.log(dragos.friends);