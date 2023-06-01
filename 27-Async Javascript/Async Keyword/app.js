//async functions automatically return promises
async function hello() {

}

//if you return a value, the promise will be resolved and have that value stored
// const sing = async () => {
//     throw new Error("Uh Oh!");
//     // throw "Oh no, problem!";
//     return 'LA LA LA LA';
// }

// sing()
//     .then((data) => {
//         console.log("PROMISED RESOLVED WITH:", data);
//     })
//     .catch(err => {
//         console.log("OH NO, PROMISE REJECTED!");
//         console.log(err);
//     });




const login = async (username, password) => {
    if (!username || !password) throw "Missing Credentials";
    if (password === 'corgifeetarecute') return "WELCOME!"
    throw "Invalid Password"
}

login("aaa", "corgifeetarecute")
    .then(
        (password) => {
            console.log("LOGGED IN!");
            console.log(password);
        }
    )
    .catch(err => {
        console.log("ERROR!");
        console.log(err);

    })