// Bitwise operators in JavaScript are special operators that work on the binary representations of numbers.

// AND(&) - returns a 1 in each bit position for which the corresponding bits of both operands are 1.
let a = 5; // Binary: 101
let b = 3; // Binary: 011
console.log(a & b); // 1 (Binary: 001)

// bitwise OR (|) - returns a 1 in each bit position for which the corresponding bits of either or both operands are 1
let c = 5; // Binary: 101
let d = 3; // Binary: 011
console.log(c | d); // 7 (Binary: 111)

// bitwise XOR (^)-returns a 1 in each bit position for which the corresponding bits of either, but not both, operands are 1.
let e = 5; // Binary: 101
let f = 6; // Binary: 110
console.log(e ^ f); // 3 (Binary: 011)

let x = 8;  // Binary: 1000
console.log(x << 2);