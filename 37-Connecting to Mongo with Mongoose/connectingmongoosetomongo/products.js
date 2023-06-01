
const mongoose = require("mongoose");
mongoose.set('strictQuery', true)



mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => { console.log("Connection open!") })
    .catch(e => {
        console.log("Error.");
        console.log(e);
    });

    const productSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            maxlength: 20
        },
        price: {
            type: Number,
            required: true,
            min: [0, "Price must be positive ya dodo"]
        },
        onSale: {
            type: Boolean,
            default: false
        },
        categories: [String],
        qty: {
            online: {
                type: Number,
                default: 0
            },
            inStore: {
                type: Number,
                default: 0
            }
        },
        size: {
            type: String,
            enum: ["S","M","L"]
        }

    })

    productSchema.methods.toggleOnSale = function() {
        this.onSale = !this.onSale;
        return this.save();
    }

    productSchema.methods.addCategory = function(newCat) {
        this.categories.push(newCat);
        return this.save();
    }

    productSchema.statics.fireSale = function(){
        return this.updateMany({}, {onSale: true, price: 0});
    }


    const Product = mongoose.model("Product", productSchema);

    const findProduct = async () => {
        const foundProduct = await Product.findOne({name: "Bike Helmet"});
        console.log(foundProduct);
        await foundProduct.toggleOnSale();
        console.log(foundProduct);
        await foundProduct.addCategory("Outdoors");
        console.log(foundProduct);
    }

    Product.fireSale().then(res => console.log(res));

    // findProduct();

    //creating bike

    // const bike = new Product({name:"Mountain Bike", price: "500", color: "red"});
    // const bike = new Product({name:"Bike Helmet from Helmet Makers", price: "29.5"});
    // const bike = new Product({name:"Bike Helmet", price: "-29.5"});
    // const bike = new Product({name:"Bike Helmet", price: "29.5", categories: ["Cycling", "Safety", 123]});
    // const bike = new Product({name:"Tire Pump", price: "19.5", categories: ["Cycling"]});


    // bike.save().then(data => {
    //     console.log("IT WORKED");
    //     console.log(data);
    // })
    // .catch(err => {
    //     console.log("OH NO ERROR");
    //     console.log(err.errors);

    // })

    //updating bike

    //     const bike = new Product({name:"Tire Pump", price: "19.5", categories: ["Cycling"]});


    // Product.findOneAndUpdate({name: "Tire Pump"}, {price: -19.99}, {new:true, runValidators: true}).then(data => {
    //     console.log("IT WORKED");
    //     console.log(data);
    // })
    // .catch(err => {
    //     console.log("OH NO ERROR");
    //     console.log(err.errors);

    // })



//creating bike with enum

    //     const bike = new Product({name:"Cycling Jersey", price: "28.5", categories: ["Cycling"], size:"XS"});


    // bike.save().then(data => {
    //     console.log("IT WORKED");
    //     console.log(data);
    // })
    // .catch(err => {
    //     console.log("OH NO ERROR");
    //     console.log(err.errors);

    // })