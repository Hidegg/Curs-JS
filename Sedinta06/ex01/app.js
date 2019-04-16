var car = {
    make: 'Nissan GT-R HP 3,8l twinturbo V6',
    color: 'dark green',
    wheels: 4,
    speed: 205,
    topSpeed: 360,
    topReverseSpeed: -50,
    accelerate: function() {
        this.speed++;
    },
    decelerate: function() {
        this.speed--;
    },
    stop: function(){
        this.speed = 0;
    },
    setSpeed: function(speed){
        if (speed > car.topSpeed){
                this.speed = car.topSpeed;
        }
        if (speed < car.topReverseSpeed){
                this.speed = car.topReverseSpeed;
        }
    },
    openTrunk: function() {
        isTrunkOpen = true;
    },
    closeTrunk: function() {
        isTrunkOpen = false;
    }
};

console.log('Masina este marca ' + car.make + ' si se deplaseaza cu ' + car.speed + ' km/h.');

console.log('****************************');

let i = 0;

for(; i < 5; i++){
    car.decelerate();
}
console.log('Viteza noua este ' + car.speed + ' km/h.');

console.log('****************************');

console.log(car.speed);

