//Comparison

console.log(2 > 1);
console.log(2 <= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


console.log("2" > 1); //true js convert the data type
console.log("02" > 1); //true js convert the data type


console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

/* The reason is that an equality check == and comparison >, <, >=, <= work differently
Comparisons convert null to a number, treating it as 0
That's why (3) null>=0 is true and (1) null > 0 is false */

console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false

// === strict check, check values as well as data type
console.log("2" === 2); // false