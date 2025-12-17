// The .toFixed() method is called on a number and takes one optional argument, which is the number of digits to appear after the decimal point. It returns a string representation of the number with the specified number of decimal places
// .toFixed() rounds up when the next digit is 5 or greater, and rounds down otherwise.
// If you call .toFixed() without arguments, it defaults to 0 decimal places:

// The .toFixed() method can be particularly useful when working with financial calculations or displaying prices:

let num = 3.6765845
console.log(typeof(num.toFixed(4))) //3.6766 //.toFixed() returns a string, not a number.