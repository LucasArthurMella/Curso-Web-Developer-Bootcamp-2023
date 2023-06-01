//higher order functions means 2 things:
//the function can accept functions as arguments
//the function can return a function

// function callTwice(func) {
//     func();
//     func();

// }

// function callTenTimes(f) {
//     for (let i = 0; i < 10; i++) {
//         f();
//     }
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
// }

// callTwice(rollDie);


// function makeMysteryFunc() {
//     const rand = Math.random();
//     if (rand > 0.5) {
//         return function () {
//             console.log("CONGRATS, I AM A GOOD FUNCTION!");
//             console.log("YOU WIN A MILLION DOLLARS!!");
//         }
//     } else {
//         return function () {
//             alert("YOU HAVE BEEN INFECTED BY COMPUTER VIRUS!")
//             alert("STOP TRYING TO CLOSE THIS WINDOW!")
//         }
//     }
// }
// //if you return a function to a variable you can then execute the returned function
// const mystery = makeMysteryFunc();



function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}



makeBetweenFunc(50, 10);

//generating different types of function by returning them, the functions returned can them be used
const isAdult = makeBetweenFunc(19, 64);
const isSenior = makeBetweenFunc(65, 120);
const isChild = makeBetweenFunc(0, 18);

// function isBetween(num) {
//     return num >= 50 && num <= 100;
// }

// function isBetween2(num) {
//     return num >= 1 && num <= 10;
// }



















