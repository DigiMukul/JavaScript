// Primitive Data Types(Call by Value)

// 7 types - String, Number, Boolean null, undefined, Symbol, BigInt  


// Non - Primitive(Reference type)
// Array, Objects, Functions

//JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.

const score = 100
const scoreVal = 100.4

const isLoggedIn = false
const outsideTemp = null
let userEmail;

 const id = Symbol('123')
 const anotherId = Symbol('123')

 console.log(id === anotherId);


 const bigNumber = 3445568518749516487n
 console.log(typeof (bigNumber));


 // Non - Primitive(Reference type)
// Array, Objects, Functions

const heros = ["naagraj", "vasuki", "jaydrath"];

let myObj = {
    name: "mukul",
    age: 22,
}

const myfunction = function(){
    console.log("Namaste");
}

console.log(typeof myfunction);