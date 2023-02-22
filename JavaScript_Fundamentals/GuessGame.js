//Genertate Rendom Number in Js and Guess The Gentrated Number in js
const prompt = require("prompt-sync")();
let number=Number(Math.floor(Math.random()*100));
//console.log(number);
let input;
let score =100;
while(input!=number){
    score=score-1;
    input=Number(prompt("Enter The Number >"))
    if (input==number){
        console.log("congratulation You have successfully guessed the number And The Number is"+ number);
        console.log(`you have guess the actual Number in ${100-score}`);
    
    }
    else if (input>number && input<100){
        console.log("your number is greater than Actual Number");
    
    }
    else if (input<number && input >0){
        console.log("your number is less than Actual Number");

    }
    else{
        console.log("Enter Number b/w 1 and 100");
    }
}
