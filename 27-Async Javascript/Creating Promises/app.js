
// //both resolve and reject are functions
// new Promise((resolve, reject) => {
//     resolve();
// });

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve("YOUR FAKE DATA HERE");
            } else {
                reject("Request Error!");
            }
        }, 1000)
    })
}

fakeRequest.apply("/dogs/1")
    .then((data) => {
        console.log("DONE WITH REQUEST");
        console.log("data is: " + data);

    })
    .catch((err) => {
        console.log("OH NO!", err);
    })