// let random = Math.random()

// if (random < 0.5) {
//     console.log("Your number is less than 0.5.")
//     console.log(random)
// }

// if(random >= 0.5) {
//     console.log("Your number is greater than or equal to 0.5.")
//     console.log(random)
// }

// const dayOfWeek = prompt("Enter a day:").toLowerCase();

// if (dayOfWeek === "monday") {
//     console.log("Ugh, I hate Mondays!");
// } else if (dayOfWeek === "saturday") {
//     console.log("Yey, I love Saturdays!");
// } else if (dayOfWeek === "friday") {
//     console.log("Fridays are decent, especially after work.");
// } else if (dayOfWeek === "tuesday") {
//     console.log("Tuesdays are MEH.");
// } else if (dayOfWeek === "wednesday") {
//     console.log("Wednesdays are MEH.");
// } else if (dayOfWeek === "thursday") {
//     console.log("Thursdays are MEH.");
// } else {
//     console.log("MEH!");
// }

//0-5 FREE
// 5-10 CHILD $10
// 10 -65 ADULT $20
// 65+ SENIOR $10

// const age = 89;

// if (age < 5) {
//     console.log('You are a baby.  You get in for FREE!')
// } else if (age < 10) {
//     console.log('You are an child.  You have to pay $10.00.')
// } else if (age < 65) {
//     console.log('You are a adult.  You have to pay $20.00')
// } else {
//     console.log('You are a senior.  You have to pay $10.00.')
// }

// const password = prompt('Please enter a new password:')

// // Password must be 6+ characters
// // Password cannot include space

// if (password.length >= 6) {
//     if (password.indexOf(' ') === -1) {
//         console.log('Valid Password.')
//     } else {
//         console.log('Password cannot contain spaces.')
//     }
// } else {
//     console.log("PASSWORD IS TOO SHORT! Must be 6+ characters.")
// }

// const password = prompt('Enter your password:');

// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log('VALID PASSWORD!')
// } else {
//     console.log('INCORRECT FORMAT FOR PASSWORD!')
// }

// const ageOne = 66;

// if ((ageOne >= 0 && ageOne < 5) || (ageOne >= 65)) {
//     console.log('TEST')
// }

const day = Math.floor(Math.random() * (7 - 1 + 1)) + 1;

// if (day === 1) {
//     console.log('Monday')
// }

switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Invalid Day Selection');
        break;
}
