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

function isShortsWeather(temperature) {
    let result = '';
    if (temperature >= 75) {
        result = true;
    } else {
        result = false;
    }
    return result;
}

let arr = [1, 2, 3, 4, 'timmy'];

function lastElement(arr) {
    if (arr.length === 0) {
        return null;
    } else {
        let lst = arr[arr.length - 1];
        return lst;
    }
}

function capitalize(string) {
    let firstLetter = string.toUpperCase()[0];
    let remaningLetters = string.slice(1, string.length);
    let newString = firstLetter + remaningLetters.toLowerCase();
    return newString;
}

let input = [1, 2, 3];

function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        let newSum = array[i];
        console.log(sum);
        sum += newSum;
    }
    return sum;
}

function returnDay(dayNum) {
    if (dayNum < 1 || dayNum > 7) {
        return null;
    } else {
        const weekDay = {
            1: 'Monday',
            2: 'Tuesday',
            3: 'Wednesday',
            4: 'Thursday',
            5: 'Friday',
            6: 'Saturday',
            7: 'Sunday',
        };
        return weekDay[dayNum];
    }
}
