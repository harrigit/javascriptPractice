const prompt = require("prompt-sync")();
//Write a Program to print "try again untill user Enter Correct NUMBER"
console.log("Write a Program to print try again untill user Enter Correct NUMBER");
let userinput = prompt("Enter Number:");
let check = 5;
while (userinput != check) {
  console.log("try Again");
  userinput = prompt("Enter Number Again");

}
console.log("Now You Enter Right Number Good Job!");

function meanofnumber(a, b, c, d, e, f) {
  let total = a + b + c + d + e + f
  let mean = (total) / 6;
  console.log(mean);
} meanofnumber(3, 5, 6, 7, 4, 35)