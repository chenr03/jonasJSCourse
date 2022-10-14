/// activating strict mode

'use strict';

// function logger (){
//   console.log('My name is Chris')
// }

// // calling / running / invoking the function
// logger();

function juicer(apples, bananas){
    console.log(apples, bananas)
    const juice = `Juice with ${apples} apples and ${bananas} bananas.`;
    return juice;
}

const bananaAppleJuice = juicer(5, 3);
console.log(bananaAppleJuice);

const appleBananaJuice = juicer(1, 15);
console.log(appleBananaJuice);

// functions help us to create reusable code that we can call / invoke / run over and over and over. 