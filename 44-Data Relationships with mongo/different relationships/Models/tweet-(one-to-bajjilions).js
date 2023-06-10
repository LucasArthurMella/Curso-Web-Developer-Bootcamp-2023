const mongoose = require("mongoose");
const { Schema } = mongoose;


mongoose.set('strictQuery', true)
mongoose.connect("mongodb://127.0.0.1:27017/relationshipDemo")
.then(() => {
    console.log("mongo connection suceeded");
}) 
.catch( (err) => {
    console.log("MONGO ERROR");
    console.log(err);
})

const userSchema = new Schema({
    username: String,
    age: Number,
})

const tweetSchema = new Schema({
    text:String,
    likes: Number,
    user: {type: Schema.Types.ObjectId, ref: "User"}

})

const User = mongoose.model("User", userSchema);
const Tweet = mongoose.model("Tweet", tweetSchema);

const makeTweets = async () => {
    // const user = new User({username: "chickenfan99", age: 61});
    // const tweet1 = new Tweet({text: "omg i love my chicken family!", likes: 0});
    // tweet1.user = user;
    // user.save();
    // tweet1.save();

    const user = await User.findOne({username: "chickenfan99"});
    const tweet2 = new Tweet({text: "bock bock bock my chickens make noises", likes: 232});
    tweet2.user = user;
    tweet2.save();
}

// makeTweets();

findTweets = async() => {
    // const t = await Tweet.find({}).populate("user", "username");
    const t = await Tweet.find({}).populate("user");
    console.log(t);
}

findTweets();


