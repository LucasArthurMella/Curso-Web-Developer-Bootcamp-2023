
// function singSong() {
//     console.log("DO");
//     console.log("RE");
//     console.log("MI");
// }
// singSong();
// singSong();
// singSong();
// singSong();
// singSong();
// singSong();
// singSong();


function greet(firstName, lastName) {
    //console.log(`firstName is: ${firstName}`);
    console.log(`Hey there ${firstName} ${lastName[0]}.!`);
}

//greet("George", "Clooney");


function repeat(str, numTimes) {
    let result = "";
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);

}

//repeat("hi", 3);

function add(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        return false;
    }
    let sum = x + y
    return sum;
}


