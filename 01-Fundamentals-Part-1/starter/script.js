// -----------//
// Basics //
// ---------- //


// let js = 'amazing';
// let equation = (40 + 8 + 23 - 10);
// console.log(equation);
//
// //'Jonas' = value
// console.log('Jonas');
// console.log(23);
//
// let firstName = 'Jonas';
// console.log(firstName)
//
// let PI = 3.1415;
// console.log(PI)
//
// // this is the best way to be more descriptive.
// let myFirstJob = 'Programmer';
// let myCurrentJob = 'Teacher';
//
// console.log(myFirstJob +' '+'&', myCurrentJob)
//
// // This is not good
// // let job1 = 'programmer';
// // let job2 = 'teacher';

// -----------//
// Data Types //
// ---------- //

// let javaScriptIsFun = true;
// console.log(javaScriptIsFun)
//
// console.log(typeof true);
// console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'true');
//
// let year;
// console.log(year = '');
// console.log(typeof year);
//
// year = 1991;
// console.log(typeof year)
//
// console.log(null, typeof null)

// ----------------//
// let, const, var //
// --------------- //

// let age = 30;
// age = 31; // reassigning value to variable, or mutate variable
//
// const birthYear = 1991;
// console.log(birthYear);
//
// const job = '';
// console.log(job)

// ----------------//
// Basic Operators //
// --------------- //
const now = 2022
const ageChris = now - 1990;
const ageAnar = now - 1989;
console.log([ageChris, 'Chris'] , [ageAnar, 'Anar']);

console.log(ageChris * 2, ageChris / 2)

Coding Challenge #1


// BMI = mass / (height x height)


// Test Data One Vairables

const markMass1 = 78; // kg
const johnMass1 = 92; // kg
const markHeight1 = 1.69; // m
const johnHeight1 = 1.95; // m

// Test Data Two Variables

const markMass2 = 95; // kg
const johnMass2 = 85; // kg
const markHeight2 = 1.88; // m
const johnHeight2 = 1.76; // m



// Test Data BMI #1

markBmi = markMass1 / (markHeight1 * markHeight1)
console.log(markBmi, 'Mark BMI Case 1') // 27.301
johnBmi = johnMass1 / (johnHeight1 * johnHeight1)
console.log(johnBmi, 'John BMI Case 1') // 24.195

// Test Data BMI #2
const markBmi2 = markMass2 / (markHeight2 * markHeight2)
console.log(markBmi2, 'Mark BMI Case 2') // 26.880
const johnBmi2 = johnMass2 / (johnHeight2 * johnHeight2)
console.log(johnBmi2, 'John BMI Case 2') // 27.441

let markHigherBMI = (markBmi > johnBmi);
console.log(markHigherBMI, 'Does Mark have a higher BMI than john?')

let markHigherBMI2 = (markBmi2 > johnBmi2);
console.log(markHigherBMI2, 'Does Mark have a higher BMI than john?')

//
// template literal strings //

const firstName = 'Chris';
const job = 'student';
const birthYear = 1990;
const year = 2022;


const chris = "I'm " + firstName + ', a ' + (year - birthYear ) + ' year old ' + job + '!';

console.log(chris);

const chrisNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`

console.log(chrisNew)

console.log(`Just a regular string....`)

console.log(`String with \n\
multiple \n\
lines`);

console.log(`String with
multiple
lines`);

// //

const age = 15;
const isOldEnough = age >= 18;
const yearsLeft = 18 - age;

if(isOldEnough){
    console.log('Sarah can start driving license 🚗')
} else {
    console.log('Sarah cannot start her driving license test 🚫🚗 until she waits for another', yearsLeft, 'years')
}

//Coding Challenge 2


console.log(`Mark's BMI is higher than John's!`, markHigherBMI)

if (markBmi > johnBmi){
    console.log(`Mark's BMI (${markBmi})!, John's BMI (${johnBmi})!`)
} else {
    console.log(`John's BMI is higher than Mark's`)
};

// //



// Type Conversion

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Chris'))
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion

console.log('I am ' + 23 + ' years old');

console.log('I am ' + String(23) + ' years old');

console.log('23' - '10' - 3); // strings converted to numbers because of minus operator but if plus sign (+) it will concatonate to strings, instead of nums

let n = '1' + 1;

// //

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Jonas')); // true
console.log(Boolean({})); // true
console.log(Boolean('')); // false

// //

//Coding Challenge 3

// test data: Dolphins score 96, 108, 89. Koalas score 88, 91, and 110

dolphinA = 96;
dolphinB = 108;
dolphinC = 89;

dolphinAvg = (dolphinA + dolphinB + dolphinC)/ 3

console.log(`This is the Dolphin Team's Average Score` ,dolphinAvg)


koalasA = 88;
koalasB = 91;
koalasC = 110;

koalasAvg = (koalasA + koalasB + koalasC)/ 3

console.log(`This is the Koala Team's Average Score` ,koalasAvg)

winningTeam = dolphinAvg > koalasAvg

if(dolphinAvg > koalasAvg){
    console.log(`Dolphins are the winning Team`, )
} else if (koalasAvg > dolphinAvg){
    console.log('Koalas are the winning Team')
} else if (dolphinAvg === koalasAvg){
    console.log('Both are the winners')
} else {
    console.log('No one is the winner')
}

// //

// switch case break statement

const day = 'saturday'; // Prints Enjoy the weekend!

switch(day){
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos')
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples')
        break;
    case 'friday':
        console.log('Record videos ')
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend!')
        break;
    default:
        console.log('Not a valid day!');
}

// if else statement

if(day === 'monday'){
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday'){
    console.log('Prepare theory videos')
} else if (day === 'wednesday' || day === 'thursday'){
    console.log('Write code examples')
} else if (day === 'friday'){
    console.log('Record videos')
} else if (day === 'saturday' | day === 'sunday'){
    console.log('Enjoy the weekend!')
} else {
    console.log('Not a valid day!')
}

// // // // //

// Conditional (Ternary) Operator

const age = 15;
// age >= 18 ? console.log('I like to drink beer 🍺') :
//   console.log('I like to drink wine 🍷');

const drink = age >= 18 ? 'wine' : 'beer';
console.log(drink);

// if else statement

let drink2;
if(age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'beer';
}

console.log(drink2)

// coding challenge 4 //

//test 1

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 :
    bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

// test 2

const bill2 = 40;
const tip2 = bill2 <= 300 && bill2 >= 50 ? bill2 * 0.15 :
    bill2 * 0.2;
console.log(`The bill was ${bill2}, the tip was ${tip2}, and the total value ${bill2 + tip2}`);

// test 3

const bill3 = 430;
const tip3 = bill3 <= 300 && bill3 >= 50 ? bill3 * 0.15 :
    bill3 * 0.2;
console.log(`The bill was ${bill3}, the tip was ${tip3}, and the total value ${bill3 + tip3}`);








