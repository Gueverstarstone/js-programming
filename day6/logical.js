const result = true && "hello";
console.log(result); // hello

//  If either operand is falsy, it returns the falsy value:
// if both operands are falsy, it returns the first falsy value:
const result1 = 0 && 3;
console.log(result1); // 0

// The logical OR operator checks if at least one of the operands is truthy. If the first operand is truthy, it returns that value:
let age = 1
if(age === 20 || age <= 4){
  console.log('allowed to drive');
}else{
  console.log('big scam')
}

// nullish coalescing operator(??)
// it helps in scenarios where you want to return a value only if the first one is null or undefined
const result3 = null ?? 'default';

console.log(result3); // default


// A practical application of Math.floor() and Math.random() is to generate a random number between two whole numbers.
const max = 10;
const min = 5;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);


// Generating a random number between 20 and 1 would look like this:
const randomNumBtw1And20 = Math.floor(Math.random() * 20) + 1;
console.log(randomNumBtw1And20);
