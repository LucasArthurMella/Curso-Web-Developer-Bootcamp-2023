const mongoose = require("mongoose");
mongoose.set('strictQuery', true)
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => { console.log("Connection open!") })
    .catch(e => {
        console.log("Error.");
        console.log(e);
    });


const personSchema = new mongoose.Schema({
    first: String,
    last: String
});

//the difference between using a virtual and a method to do this, is that with a virtual, the virtual itself will behave as if it was a property
//the property does not exist in the database, but only in mongoose, only on the model instance itself.
personSchema.virtual("fullName").get(function() {
    return `${this.first} ${this.last}`
}).set(function(name) {
    this.first = name.substr(0, name.indexOf(" "));
    this.last = name.substr(name.indexOf(" ") + 1);
    return `${this.first} ${this.last}`
});;

personSchema.pre("save", async function() {
    this.first = "YO";
    this.last = "MAMA";
    console.log("ABOUT TO SAVE!!!");
});

personSchema.post("save", async function() {
    console.log("JUST SAVED!!!!");
});



const Person = mongoose.model("Person", personSchema);

