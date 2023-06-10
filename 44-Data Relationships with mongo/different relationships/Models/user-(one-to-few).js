const mongoose = require("mongoose");

mongoose.set('strictQuery', true)
mongoose.connect("mongodb://127.0.0.1:27017/relationshipDemo")
.then(() => {
    console.log("mongo connection suceeded");
}) 
.catch( (err) => {
    console.log("MONGO ERROR");
    console.log(err);
})


const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
        _id: { _id: false},
         street: String,
         city: String,
         state: String,
         country: { 
            type: String, 
            required: true
        }   
        }
    ]
})

const User = mongoose.model("User", userSchema);

const makeUser = async () => {
    const u = new User({
        first: "Harry",
        last: "Potter"
    })
    u.addresses.push({
        street: "123 Sesame St.",
        city: "New York",
        state: "NY",
        country: "USA"
    })
    const res = await u.save();
    console.log(res);
}


const addAddress = async(id) => {

   const user = await User.findById(id);

   user.addresses.push({
    street: "123 Sesame St.",
    city: "New York",
    state: "NY",
    country: "USA"
   }); 
   const res = await user.save();
   console.log(res);
}
addAddress("6483adbcb2a47f1c5ea684e6");
// makeUser();