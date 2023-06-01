
const password = prompt("please enter a new password");


//Password must be 6+ characters
//Password cannot include space

if (password.length >= 6) {
    if (password.indexOf(" ") == -1) {
        console.log("Good job! No space!");
    } else {
        console.log("Password cannot contain spaces!");
    }
}

else {
    console.log("Password too short, must be 6+ characters");
}



