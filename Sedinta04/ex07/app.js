var friends = [{
        name: 'Dragos',
        surname: 'Iordache',
        friends: {}
    }, {
        name: 'Larry',
        surname: 'Larryson',
        friends: {}
    }, {
        name: 'Steven',
        surname: 'Stevenson',
        friends: {}
    }, {
        name: 'Carol',
        surname: 'Carolson',
        friends: {}
    }, {
        name: 'Andra',
        surname: 'Andrason',
        friends: {}
}];

var nameLength = 0;

for (i = 0; i < friends.length; i++){

    nameLength = friends[i].surname.length + friends[i].name.length;

    if (friends[i].surname === 'Stevenson'){
        continue;
    }

    if(nameLength >= 13){
        console.log(friends[i].name + ' ' + friends[i].surname);
    }
}
