
//the property arguments native to any function holds all arguments passed to the function.
// function sum() {
//     return arguments.reduce((total, el) => total + el);

// }
// sum(3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 1, 2, 3);



// the argument with ... collects the rest of the arguments passed in. (which in the sum call under would be the arguments 5 and 7)
// function sum(x, y, z, ...nums) {
//     return nums.reduce((total, el) => total + el);
// }

// sum(3, 2, 3, 5, 7);


function raceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`);
    console.log(`SILVER MEDAL GOES TO: ${silver}`);
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`);
}