
// setTimeout(() => {
//     document.body.style.backgroundColor = "red";
// }, 1000);


// setTimeout(() => {
//     document.body.style.backgroundColor = "orange";
// }, 2000);

// setTimeout(() => {
//     document.body.style.backgroundColor = "yellow";
// }, 3000);



// setTimeout(() => {
//     document.body.style.backgroundColor = "red";
//     setTimeout(() => {
//         document.body.style.backgroundColor = "orange";
//         setTimeout(() => {
//             document.body.style.backgroundColor = "yellow";
//             setTimeout(() => {
//                 document.body.style.backgroundColor = "green";
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = "blue";
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);


const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay);
}

delayedColorChange("red", 1000, () => {
    delayedColorChange("orange", 1000, () => {
        delayedColorChange("yellow", 1000, () => {
            delayedColorChange("green", 1000, () => {
                delayedColorChange("blue", 1000, () => {

                });
            });
        });
    });
});

//function that does not exist, executes the callback whenever it finishes searching for movies
searchMoviesAPI("amadeus", () => {
    saveToMyDB(movies, () => {
        //if it  works, run this:
    }, () => {
        //if it doesnt work, run this:
    },
        () => {
            //if api is down, or request failed
        }

    );
});


