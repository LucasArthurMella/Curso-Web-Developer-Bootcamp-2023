const express = require("express");
const app = express();
const path = require("path");
const redditData = require("./data.json")
// console.log(redditData);

app.use(express.static(path.join(__dirname, "public")));


app.set("view engine", "ejs" );
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {

    res.render("home.ejs", {name: "Home"});

});

app.get("/cats", (req, res) => {
const cats = [
    "BLUE", "ROCKET", "MONTY", "STEPHANIE", "WINSTON"
]

    res.render("cats", { cats });
});

app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;

    const data = redditData[subreddit];
    if(data){
    res.render("subreddit", { ...data });
    }else {
        res.render("notfound", { subreddit, name: "Not Found" })
    }
});

app.get("/rand", (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1

    res.render("random.ejs", {rand: num, name: "rand"});

})

app.listen(3000, () => {
    console.log("LISTENING ON 3000");
})