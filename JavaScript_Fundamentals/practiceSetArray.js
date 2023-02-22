//Question No 1

let filter=[10,40,22,44,50,80,90]
let Divisible=filter.filter((value)=>{
    return value%10==0;
})
console.log(Divisible);


//Question No 2

const prompt = require("prompt-sync")();

let number=Number(prompt("Enter Any Number"));
let array =[20,30,40,50]


    if (number==0){
        console.log(array);
    }else{
        array.push(number)
    }

console.log(array);


//Question No 3

let square=[2,3,4,5]
let a=square.map((value)=>{
    return value*value;
})
console.log(a);


//Question No 4 
//find Factorial of the array
let fact=[1,2,3,4,5,6]
let f=fact.reduce((value1,value2)=>{
    return value1* value2;
})
console.log(f);
