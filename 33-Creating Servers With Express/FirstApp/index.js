const express = require('express');
const app = express();

// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST");
    // res.send("HELLO, WE GOT YOUR REQUEST!");
    // res.send('<h1> This is my webpage! </h1>');
// })

app.get("/", (req,res) => {
    res.send("This is the home page!");
}); 

app.get("/r/:subreddit", (req, res) =>{
    const { subreddit } = req.params;
    res.send(`<h1>Browing the ${subreddit} subreddit`);
});

app.get("/r/:subreddit/:postId", (req, res) =>{
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing the ${postId} id on the ${subreddit} subreddit`);
});

app.post("/cats", (req,res) =>{
    res.send("POST REQUEST TO /cats!!!! THIS IS DIFFERENT THAN A GET REQUEST");
})

app.get("/cats", (req,res) => {
    res.send("MEOW");
});

app.get("/dogs", (req, res) => {
    res.send("WOOF!");
})

app.get("/search", (req,res) => {
    // console.log(req.query);
    const { q } = req.query;
    if(!q){
        res.send("nothing found if nothing searched");
    } else{
    res.send(`<h1> Search results for ${q}`);
    }
})

app.get("*", (req,res) => {
    res.send(`I don't know that path!`);
});



// /cats => 'meow'
// /dogs => 'woof'
// '/'

app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080!");
}); 