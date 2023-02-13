let Salary = [100000,80000,40000,50000]
console.log(Salary[0])
console.log(Salary[3])


Salary[4]=200000;
console.log(Salary)
console.log(Salary.length)
/**With Push You Add Values at End of Array and With Unshift You Add Values At Begnning of Array */
Salary.push(70000,90000,300000)
console.log(Salary)
Salary.unshift(60000)
console.log(Salary,Salary.length)

/**With POP Removing an element from the end of an array */

Salary.pop();
console.log(Salary)
/*Shif is Used to remove Element From Begaging of an Array  */

Salary.shift();
console.log(Salary)



let a=20+30;
console.log(a)


let values = {
    value:20,
    value2:30,
    value3:50
}

let Add = (values.value)+(values.value2)+(values.value3);
console.log(Add)

/* Unary plus (+) */

let x='10';
let y= +x;
console.log(y)


let f = false,
    t = true;

console.log(+f); 
console.log(+t); 


let z = 10, 
    b = 20; 

console.log(z >= b);  // false
console.log(z == 10); // true


let name1="Haris Niazi",
Name2 ="Uzair Nadeem"
console.log(Name2>name1)

//code with Harry Practice

//Arrays in JS 
let Scores = [85,24,33,11,45,50,66,88,1,"DNB","Retired Rurt"]
console.log(Scores);
console.log(Scores[0]);
console.log(Scores[1]);
console.log(Scores[2]);
console.log(Scores[3]);
console.log(Scores[4]);
console.log(Scores[5]);
console.log(Scores[6]);
console.log(Scores[7]);
console.log(Scores[8]);
console.log(Scores[9]);
console.log(Scores[10]);

console.log(Scores.length);
Scores[11]=99;
console.log(Scores);
Scores[3]=53;
console.log(Scores);