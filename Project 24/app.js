// let die1 = Math.floor(Math.random() * 6) + 1;

function singSong() {
    console.log('DOE');
    console.log('RAE');
    console.log('MI');
}

function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.`);
}

function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    let sum = x + y;
    return sum;
}

