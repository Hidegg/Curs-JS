var i = 0;

for (; i <= 100; i += 1){
    console.log(i);
    if (i%7 !== 0){
        continue;
    }
    console.log(i + ' - acest numar este multiplu de 7.')
}