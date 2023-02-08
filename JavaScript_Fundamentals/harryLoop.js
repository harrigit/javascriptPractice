
const prompt = require("prompt-sync")();
//sum of input number in for loop
let sum = 0;
let num = Number(prompt("Enter The Number"));
for (let a = 0; a < num; a++) {
  sum = sum + (a + 1);


}
console.log(sum)



//For IN Loop In JS
console.log("For IN loop in JS ");
let object = {
  Name: "Muhammad Haris Khan Niazi",
  CompanyID: 39,
  COmpanyName: "ICOMMUNIX",
  Position: "SQA ENGINEER"
}
for (let a in object) {
  console.log(a, "=", object[a]);
}


//While Loop in JS 
console.log("While loop in JS");
let n = Number(prompt("Enter Number"));
let i = 0;
while (i < n) {
  console.log(i);
  i++;
}

let permutation = 1;
let P = Number(prompt("Enter Number"));
let j = 1;
while (j <= n) {
  permutation = permutation * (j * 1);
  j++;
}
console.log(permutation);


//DO While Loop In JS
console.log("DO WHILE Loop in JS");
let fac = 1;
let f = Number(prompt("Enter Number"));
let k = 1;
do {

  fac = fac * (k * 1);
  k++;
} while (k <= f)
console.log(fac);