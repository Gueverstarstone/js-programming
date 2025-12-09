//The includes() method is used to check if a string contains a specific substring.
// If the substring is found within the string, the method returns true otherwise, it returns false.
const subString = "This is my second home";
console.log(subString.includes("second"));

//You can also use the includes() method to check for a substring starting at a specific index in the string by providing a second parameter:
const newWord = "It is going to be well soon";
console.log(newWord.includes('is', 0));
