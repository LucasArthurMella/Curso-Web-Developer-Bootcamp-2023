const express = require("express");
const app = express();
const morgan = require("morgan");



app.use(morgan("dev"));
app.use((req,res, next) => {
    //turns all requests into get requests
    // req.method = "GET";
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
});

//will do that in any type of routes with any verbs that matches /dogs
app.use("/dogs", (req,res, next) => {
    console.log("I LOVE DOGS!!");
    next();
});

// app.use((req,res,next) => {
//     const {password} = req.query;
//     if(password === "chickennugget"){
//         next();
//     }
//     res.send("SORRY YOU NEED A PASSWORD!!!");
// });



const verifyPassword = (req,res,next) => {
    const {password} = req.query;
    if(password === "chickennugget"){
        next();
    }
    res.send("SORRY YOU NEED A PASSWORD!!!");
};





//you can either execute next(), or return next(). if you execute next(), code that is after next will be executed
//after other app.use functions have been executed, if you return next(), nothing after the return will execute.
// app.use((req,res, next) => {
//     console.log("THIS IS MY FIRST MIDDLEWARE");
//     next();
//     console.log("THIS IS MY FIRST MIDDLEWARE - AFTER CALLING NEXT()")
// })

// app.use((req,res, next) => {
//     console.log("THIS IS MY SECOND MIDDLEWARE");
//     return next();
// })

// app.use((req,res, next) => {
//     console.log("THIS IS MY THIRD MIDDLEWARE");
//     return next();
// })


app.get("/", (req,res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send("HOME PAGE!");
});

app.get("/dogs", (req,res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send("WOOPH WOOPH!");
});

//when defining a route, you can use as an argument a function that will be executed before the
//route code, if this function uses a next() it then executes the code inside the route, otherwise
//it will not continue
app.get("/secret", verifyPassword, (req,res) => {
    res.send("MY SECRET IS: Sometimes i hold myself not to...");
})


//will execute if no route defined was executed
app.use((req,res) => {
    res.status(404).send("NOT FOUND");
});


app.listen(3000, "localhost", (req,res)=>{
    console.log("App is running on localhost:3000");
});
