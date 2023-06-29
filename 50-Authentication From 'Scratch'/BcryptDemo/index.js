const bcrypt = require("bcrypt");

// const hashPassword = async (pw) => {
//     const salt = await bcrypt.genSalt(12);
//     const hash = await bcrypt.hash(pw, salt);
//     console.log(salt);
//     console.log(hash);
//     return hash;
// }

const hashPassword = async (pw) => {
    const hash = await bcrypt.hash(pw, 12);
    console.log(hash);
    return hash;
}

const login = async(pw, hashedPw)=>{
    const result = await bcrypt.compare(pw, hashedPw);
    if(result){
        console.log("LOGGED YOU IN! SUCCESFULL MATCH")
    } else {
        console.log("INCORRECT");
    }
}

const compare = async () => {
    const hashedPassword = await hashPassword("monkey");
    await login("monkey", hashedPassword);
}

compare();

