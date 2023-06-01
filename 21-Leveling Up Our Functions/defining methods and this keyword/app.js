const myMath = {
    PI: 3.14159,
    //2 different ways to write methods
    square(num) {
        return num * num;
    },
    cube: function (num) {
        return num ** 3;
    }

}

const cat = {
    name: "Blue Steele",
    color: "Grey",
    breed: "scottishg fold",
    meow() {
        console.log("THIS IS", this);
        console.log(`${this.name} says MEOWWWW`);
    }
}

const meow2 = cat.meow;