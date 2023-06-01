// const password = prompt("Enter your password");
// if (password.length >= 6 && password.indexOf(" ") === -1) {
//     console.log("VALID PASSWORD!");
// } else {
//     console.log("Incorrect format for password!");
// }

// 0-5 free
// 5-10 $10
//10-65 $20
//65+ free


// const age = -20;
// if ((age >= 0 && age < 5) || age >= 65) {
//     console.log("FREE");
// } else if (age >= 5 && age < 10) {
//     console.log("$10");
// } else if (age >= 10 && age < 65) {
//     console.log("$20");
// } else {
//     console.log("invalid age");
// }


// const firstName = prompt("enter your first name");
// if (!firstName) {
//     firstName = prompt("TRY AGAIN")
// }




const age = 30;
if (!((age >= 0 && age < 5) || age >= 65)) {
    console.log("YOU ARE NOT A BABY OR A SENIOR!");
}