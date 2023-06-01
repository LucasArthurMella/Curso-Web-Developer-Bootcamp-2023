const delayedColorChange = (color, delay) => {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                document.body.style.backgroundColor = color;
                resolve();
            }, delay)
        }
    );
}

//you can either return or execute the promise
// delayedColorChange("red", 1000)
//     .then(() => {
//         delayedColorChange("orange", 1000)
//     })
//     .then(() => {
//         return delayedColorChange("yellow", 1000)
//     })
//     .then(() =>
//         delayedColorChange("green", 1000)
//     )
//     .then(() =>
//         delayedColorChange("blue", 1000)
//     )
//     .then(() =>
//         delayedColorChange("indigo", 1000)
//     )
//     .then(() =>
//         delayedColorChange("violet", 1000)
//     )

async function rainbow() {
    await delayedColorChange("red", 1000);
    //console.log("HI");
    await delayedColorChange("orange", 1000);
    await delayedColorChange("yellow", 1000);
    await delayedColorChange("green", 1000);
    await delayedColorChange("blue", 1000);
    await delayedColorChange("indigo", 1000);
    await delayedColorChange("violet", 1000);
    return "ALL DONE";

}

// rainbow().then((success) => {
//     console.log(success);
// })

async function printRainbow() {
    await rainbow();
    console.log("End of rainbow!");
    // console.log(await rainbow());
}

printRainbow();