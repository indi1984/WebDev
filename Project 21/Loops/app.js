

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 1; i <= 20; i += 2) {
//     console.log(i)
// }

// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i)
// }

// let people = ['tom', 'billy', 'jamie', 'kelly'];
// for (let i = 0; i < people.length; i++) {
//     console.log(i, people[i].toUpperCase())
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`i is: ${i}`)
//     for (let j = 0; j < 4; j++) {
//         console.log(`   j is: ${j}`)
//     }
// }

// const seatingChart = [
//     ['Kristen', 'Erick', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     console.log(`ROW #${i + 1}`)
//     for (j = 0; j < row.length; j++) {
//         console.log("   " + row[j])
//     }
// }

// let count = 0

// while (count < 10) {
//     count++;
//     console.log(count)
// }

// const secret = 'babyHippo';
// let guess = prompt('Enter the secret code:');
// while (guess !== secret) {
//     guess = prompt('Enter the secret code:');
// }
// console.log('Congrats, you got the secret!');

let input = prompt('Hey, say something!')
while (true) {
    input = prompt(input);
    if (input.toLocaleLowerCase() === "stop copying me") break;
}
console.log("OK YOU WIN!");
