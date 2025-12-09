//ASCII-a system for encoding characters such as letters,digits and sysmbols into numerical values
// ASCII code of a character using the charCodeAt() method. 
const letter = "a";
const assciiNum = letter.charCodeAt();
console.log(assciiNum);

let number = 'u';
console.log(number.charCodeAt(0));

//convert an ASCII code into its corresponding character using fromCharCode()
let char = String.fromCharCode(66)
console.log(char);
