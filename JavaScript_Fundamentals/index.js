const prompt = require("prompt-sync")();
console.log("Hello ustad Check kr rha hun");
let a = 67;

console.log(a);
//Differences b/w let, var and Const
var b = "Haris";
{
  let b = "Khan";
  console.log(b);

}
console.log(b);

const Auther = "Muhammad Haris Khan";
console.log(Auther);

//if Else 
let x = 10, y = 20;
if (x > y) {
  console.log("X is Greater Than Y");
}
else {
  console.log("Y is Greater Than X");
}


//7 Types Of Premitive DataTypes
//yad krna ka tarika NN BB SS U
let s = null;
let g = 34;
let j = false;
let k = BigInt(678999);
let v = undefined;
let h = Symbol("I am A Symbol");
let l = "Muhammad"
console.log(s, g, j, k, v, h, l);
console.log(typeof k);


// Non Premitive DataTypes Objects In JS

let Employee = {
  Name: "Muhammad HAris khan",
  ID: 90,
  Age: 24,
  Position: "SQA Engineer"
}
console.log(Employee.Name, Employee.ID);
console.log(Employee["Age"])
console.log(Employee["ddd"])

///Practice Questions 
//Q1
let m = "Haris";
let i = 24;
console.log(m + i);
//Q2
console.log(typeof m, typeof i);
//Q3
const Brothers = {
  Name1: "Haris",
  Name2: "Aizan",
  Name3: "Saddam",

}
Brothers['Name4'] = "Hashir";
console.log(Brothers);

//Arthimatics Operators in js
console.log("Arthimatics Operators")

let num1 = 4;
let num2 = 3
console.log("num1+num2=", num1 + num2);
console.log("num1-num2=", num1 - num2);
console.log("num1*num2=", num1 * num2);
console.log("num1/num2=", num1 / num2);
console.log("num1%num2=", num1 % num2);
console.log("num1**num2=", num1 ** num2);
console.log("++num1=", ++num1);
console.log("num1++=", num1++);
console.log("num1=", num1);
console.log("--num2=", --num2);
console.log("num2--=", num2--);
console.log("num2=", num2);

///Comaprison Operators

//==equal to 
//!= not equal to 
//=== Equal Value And Type 
//!== Not Equal value Not Equal Type
//> Greater Than
//< less Than
//>= Greater Than And Equal To
//<= Less Than And Equal To
//? Ternary Operators
console.log("COmparison Operators")
let n1 = 5;
let n2 = 8;
console.log("n1==n2 is", n1 == n2);
console.log("n1!=n2 is", n1 != n2);
console.log("n1===n2 is", n1 === n2);
console.log("n1!==n2 is", n1 !== n2);
console.log("n1>n2 is", n1 > n2);
console.log("n1<n2 is", n1 < n2);
console.log("n1>=n2 is", n1 >= n2);
console.log("n1<=n2 is", n1 <= n2);


console.log("Logical Operators");
//&& LogicAL And 
//|| Logical OR
// ! Logical Not
let m1 = 8;
let m2 = 3;
let m3 = false;
console.log(m1 > m2 && m1 != m2);
console.log(m1 < m2 || m1 != m2);
console.log(!m3);

// COnditions in js
console.log("Conditions");

let a1 = 5;
let b1 = 3;
if (a1 > b1) {
  console.log("true")
}
else {
  console.log("Fasle")
}
console.log(b1);

//input value From User In JS 
console.log("Input From User And Conditions Statment");
let z = prompt("What is Your Age?");
console.log("your age Is", z);
if (z < 10) {
  console.log("Bacha Asi Batain ni krta Ok")
}
else if (z >= 10 && z <= 17) {
  console.log("You Are Under age");
} else if (z >= 18 && z <= 24) {
  console.log("Ustad Shadi kr Age Ho gAI ha apki ");
}
else if (z >= 25 && z <= 32) {
  console.log("Ustad Shadi kr Age Nikali ja rahi ha");
}
else {
  console.log("O Budha Insan Shadi kr");
}

//Convert String To Number TypeCasting IN JS
console.log("Type Casting In String");
let p = prompt("Enter Any Values:");
console.log(typeof p);
p = Number.parseInt(p);
console.log(typeof p);


//Switch Statement In JS
console.log("Switch Statement In JS");
const marks = Number(prompt("Enter Your Marks="));
console.log(typeof marks);
switch (true) {
  case marks <= 500 && marks >= 400:
    console.log("Excellent Work Haris");
    break;
  case marks <= 399 && marks >= 350:

    console.log("Good Work Haris");

    break;
  case marks <= 349 && marks >= 300:

    console.log("Normals Marks Haris");

    break;
  case marks <= 299 && marks >= 0:

    console.log("Haris You Are Fail");

    break;

}

//Practice Question Check The Input Number is Divisilble by 2 and 3


console.log("Practice Question Check The Input Number is Divisilble by 2 and 3");
const check = Number(prompt("Input Number for Check="));
switch (true) {
  case check % 2 == 0 && check % 3 == 0:
    console.log("This Number is Divisibe by both 2 and 3");
    break;
  case check % 2 == 0:
    console.log("This Number is Divisible by 2")
    break;
  case check % 3 == 0:
    console.log("This Number is divisible by 3");
    break;
  default:
    console.log("This Number is Neither Divisile by 2 nor 3 ");

}

//Loops In JS
console.log("Loops In JS ");
for (let lo = 0; lo < 5; lo++) {
  console.log(lo);
}
