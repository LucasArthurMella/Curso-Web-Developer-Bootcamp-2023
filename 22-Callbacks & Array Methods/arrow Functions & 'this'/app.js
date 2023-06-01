// const person = {
//     firstName: "Viggo",
//     lastName: "Mortensen",
//     fullName: function () {
//         return `${this.firstName} ${this.lastName};`
//     }
// }





//the key here is that the keyword "this" inside a normal function expressions refer to the function parent
//which in the case of the this inside fullName would be person (because person is the parent of fullName) while
//in arrow functions the keyword "this" inside an arrow function refers to the arrow function GRANDparent, which in
//the case of the this inside setTimeOut would also be person (because person is the grandparent of settimeout) 
const person = {
    firstName: "Viggo",
    lastName: "Mortensen",
    fullName: function () {
        console.log(this);
        return `${this.firstName} ${this.lastName};`
    },
    shoutName: function () {
        setTimeout(() => {
            //console.log(this);
            console.log(this.fullName());
        }, 3000);
    }
}