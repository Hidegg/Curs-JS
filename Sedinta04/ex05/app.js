var i;

for (i = 0; i <= 100; i++) {
    console.log(i);
    if (i%7 === 0) {
        console.log(i + ' - Acest nr e multiplu de 7.');
        continue;
    }
};