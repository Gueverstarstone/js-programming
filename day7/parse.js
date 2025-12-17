// parseFloat(). This method parses a string argument and returns a floating-point number.
console.log(parseFloat("3.14"));     // 3.14
console.log(parseFloat("3.14 abc")); // 3.14
console.log(parseFloat("3.14.5"));   // 3.14
//  If it can't find a valid number at the start of the string, it returns NaN (Not a Number).
console.log(parseFloat("abc6 3.14")); // NaN

// parseInt() parses a string argument and returns an integer
console.log(parseInt("42"));       // 42
console.log(parseInt("42px"));     // 42
console.log(parseInt("3.14"));     // 3
console.log(parseInt("abc123"));   // NaN

console.log(parseFloat("3.14.15"))