const firstName = "Kaycee";
const lastName = "Tjon Kon Fat";
let age = 19;

//template string
let message = `Hallo, ik ben ${firstName} ${lastName} en ik ben ${age} jaar oud`;

//concatenate
let message2 = "Hallo, ik ben " + firstName + " " +lastName + " en ik ben " + age + " jaar oud";

console.log(message);

///Math
const priceOfAnApple = .59;
let numberOfApples = 200;

const price = priceOfAnApple * numberOfApples;

console.log(price);

///replace words
let string = "Please visit the HZ University of applied science";
console.log(string.replace("applied", "mad"));