// let die1 = Math.floor(Math.random() * 6) + 1;

function singSong() {
    console.log('DOE');
    console.log('RAE');
    console.log('MI');
}

function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName}.`);
}

function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}
