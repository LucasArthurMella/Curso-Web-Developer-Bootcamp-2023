const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const AppError = require("./AppError");
mongoose.set('strictQuery', true)

const Product = require("./models/product");

mongoose.connect('mongodb://127.0.0.1:27017/farmStand2')
    .then(() => { console.log("Connection open!") })
    .catch(e => {
        console.log("Error.");
        console.log(e);

    });


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"));


const categories = ["fruit", "vegetable", "dairy"];
app.get("/products", async (req, res, next) => {
    try {
        const { category } = req.query;
        if (category) {
            const products = await Product.find({ category: category })
            res.render("products/index", { products, category });
        } else {
            const products = await Product.find({});
            res.render("products/index", { products, category: "All" });
        }
    } catch (e) {
        next(e);
    }

})

app.get("/products/new", (req, res) => {
    // throw new AppError("NOT ALLOWED!", 401);
    res.render("products/new", { categories });

})


//basically what this is doing, if we use a .catch in an async function we can avoid the usage of try catch every time
//in order to do that, you want to create a function X(wrapAsync) that will receive the function Y used in the route as a paramater and pass this
//function X as a parameter for the route, and this function X will return a function Z with the same arguments as the function Y, but what changes is that this function Z
//will execute the function Y inside it with a .catch function in the end to catch the error, but notice, the function Z is being returned
//it's not being executed, it will only execute when express wants that it does it, so when it gets executed, it will run function Y normally cause
//function Y is executing inside function Z
function wrapAsync(fn){
    return function(req,res, next){
        fn(req,res, next).catch(e => {next(e )});
    }
}

app.get("/products/:id", wrapAsync(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        throw new AppError("Product Not Found", 404);
    }
    console.log(product);
    res.render("products/show", { product });
}));




// app.get("/products/:id/edit", async (req,res, next) => {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     if(!product){
//         return(next(new AppError("Product Not Found", 404))) ;
//     }
//     res.render("products/edit", { product, categories });
// })

//whenever you're in an async function, if you're gonna throw an error, you have to wrap it up inside next() so
//express know you're throwing it, that is happening on the example above, but on the example below, as you're
//catching the error with try catch, you can just throw it cause it will be passed to the catch area, and then
//when it is finally passed to the catch area you can wrap it up inside next
app.get("/products/:id/edit", async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) {
            throw new AppError("Product Not Found", 404);
        }
        res.render("products/edit", { product, categories });
    } catch (e) {
        next(e);
    }
})


app.put("/products/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
        res.redirect(`/products/${product._id}`);
    } catch (e) {
        next(e);
    }
});

app.delete("/products/:id", async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect("/products");
});





app.post("/products", wrapAsync(async (req, res, next) => {

        const newProduct = new Product(req.body);
        await newProduct.save();
        res.redirect(`/products/${newProduct._id}`);

}));


const handleValidationErr = err => {
    console.log(err);
    return new AppError(`Validation Failed...${err.message}`, 400);
}

app.use((err, req, res, next) => {
    console.log(err.name);
    if(err.name === "ValidationError"){
        err = handleValidationErr(err);
    }
    next(err);

});

app.use((err, req, res, next) => {
    const { status = 500, message = "Something went wrong" } = err;
    res.status(status).send(message);
});

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000");
})
