// Numbers

// An integer is a whole number
const myNumber = 42;

// A number with a decimal point is a float which references the "floating point"
const myFloat = 42.01;
const myString = "42";

console.log(myNumber === myString);
console.log(myString + 3);
console.log(Number(myString) + 3);
console.log(Number(myString) === 3);
console.log(Number("Dave"));
console.log(Number(false));

// Number Methods
// The Number .isInteger() method determines whether the passed value is an integer.

// The Number.parseFloat() method parses an argument and returns  floating point number. If a number cannot be parsed form the argument, it returns NaN

//The toFixed() method formats a number according to how many decimal points you provide as the parameter.

// The to String() method returns a string representing the number.

// Chaining = Using several methods chained together

//NaN is an acronym for Not a Number

//The gobal

console.log(Number.isInteger(myNumber));
console.log(Number.parseFloat(myFloat));
console.log(Number.parseFloat(myFloat));

