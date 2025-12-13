let isOldToDrive = false;
if (isOldToDrive) {
  console.log("You are old enough to drive");
} else {
  console.log("Go to school and learn");
}

//equality operator(==) - uses type coercion before checking if each value is equal.
let num1 = 5;
let num2 = "5";
console.log(num1 == num2); //true

// strict equality operator(===)
let num3 = 5;
let num4 = "5";
console.log(num3 === num4); //false

// inequality operatot(!=)
let num5 = 5;
let num6 = "5";
console.log(num5 != num6); //false

// srtict inequality operator
let num7 = 5;
let num8 = "5";
console.log(num7 !== num8); //true

console.log(6>=6);

