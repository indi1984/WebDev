// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let num of numbers) {
//     console.log(num ** 2);
// }


const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}

// Do not use "For..of" for object literal.

// for (let person of testScores) {
//     console.log(person);
// }


// Use "For...in" loop instead.

for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}.`);
}

//OR use "Object.xxx(object)"

let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
    total += score;
}
console.log(`The Average Score is ${total / scores.length}.`);
