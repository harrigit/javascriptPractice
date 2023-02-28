//Differences between Syncronized and Asyncronized Programming in JS 
//Syncronized programming Example:
const prompt = require("prompt-sync")();
let a= Number(prompt("Enter even  Number"));
let b=Number(prompt("Eneter Any Number"))
console.log(a,b);

//Asyncronized programming Example 
console.log("I am Waiting for 5 Second");
setTimeout(function () {
    console.log("wait Complete ");
}, 5000);
console.log("after set timeout")

//CallBacks In Js 
const message=()=>{
    console.log("This Message is Shown after 10 seconds");
}
setTimeout(message, 10000);
//Callback as an Arrow Function
setTimeout(() => { 
    console.log("This message is shown after 3 seconds");
}, 3000);

