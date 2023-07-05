const mongoose = require("mongoose");
const cities = require("./cities")
const {places, descriptors} = require("./seedHelpers");
const Campground = require("../models/campground");

mongoose.set('strictQuery', true)
mongoose.connect("mongodb://127.0.0.1:27017/yelp-camp", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];


const seedDB = async() => {
    await Campground.deleteMany({});
    for(let i = 0; i < 50; i++){
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '649e588186dfea454c2d0b1f',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium iure nostrum quisquam reprehenderit quidem minima magnam hic ab reiciendis rerum et, doloribus, porro odio. Voluptatem mollitia ad sapiente doloribus debitis!",
            price,
            images: [
                {
                  url: 'https://res.cloudinary.com/disbveh0a/image/upload/v1688523268/YelpCamp/tuupkgpyeukonl6qqkoc.png',
                  filename: 'YelpCamp/tuupkgpyeukonl6qqkoc',
                },
                {
                  url: 'https://res.cloudinary.com/disbveh0a/image/upload/v1688523268/YelpCamp/f5mncbmeiutqt8z2ctax.png',
                  filename: 'YelpCamp/f5mncbmeiutqt8z2ctax',
                },
                {
                  url: 'https://res.cloudinary.com/disbveh0a/image/upload/v1688523269/YelpCamp/uk3toy88y0mlxdchee6z.jpg',
                  filename: 'YelpCamp/uk3toy88y0mlxdchee6z',
                }
              ],
            
        })
        await camp.save();
    }
};

seedDB().then(() => {
    mongoose.connection.close();
});