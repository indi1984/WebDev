
// function collectEggs() {
//     let totalEggs = 6;
//     console.log(totalEggs);
// }

// let bird = 'Scarlet Macaw';
// function birdWatch() {
//     let bird = 'Great Blue Heron';

// }

// console.log(bird);


// let radius = 8
// if (radius > 0) {
//     const PI = 3.14159;
//     let msg = 'HIII!';
// }

// console.log(radius);


// function callTwice (func) {
//     func();
//     func();
// }

// function callTenTimes(f){
//     for(let i = 0; 1 < 10; i++){
//         f();
//     }
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
// }

// function makeMysteryFunc() {
//     const rand = Math.random();
//     if (rand > 0.5) {
//         return function () {
//             console.log('CONGRATS, I AM A GOOD FUNCTION!');
//             console.log('YOU WIN A MILLION DOLLARS!');
//         }
//     } else {
//         return function () {
//             alert(' YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!');
//             alert('STOP TRYING TO CLOSE THIS WINDOW!');
//         }
//     }
// }

// function makeBetweenFunc(min, max) {
//     return function (num) {
//         return num >= min && num <= max;
//     }
// }

// function isBetween(num) {
//     return num >= 50 && num <= 100;
// }

// function isBetween2(num) {
//     return num >= 1 && num <= 10;
// }

// const isChild = makeBetweenFunc(0, 18);
// const isAdult = makeBetweenFunc(19, 64);
// const isSenior = makeBetweenFunc(65, 120);


const myMath = {
    PI: 3.14159,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
};

const square = {
    area(side) {
        return side * side;
    },
    perimeter(side) {
        return side * 4;
    }
};

const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'Scottish fold',
    meow() {
        console.log('THIS IS:', this)
        console.log(`${this.name} says 'MEOW MEOW MEOW'`)
    }
};

const meow2 = cat.meow;

