if (NaN) {
  console.log("this will not run");
}

if (5) {
  console.log("print this");
}

let age =19;
if (age >=18 && age<= 20) {
  console.log("can vote");
} else if(age>=21){
  console.log('can drive')
}
else {
  console.log("underage");
}

const temp = 20
const weather  = temp > 25 ?'sunny':'cool'
console.log(`it is a ${weather} day`);