export class Person{// is import ka Mtlb ha ka Hum na Agr Is Class ko Ksi Aur File ka Andar Access krna ha to hum kr sakta hain
    constructor(Name ,Age ,Salary,ID ){
        this.name=Name;
        this.age=Age;
        this.salary=Salary;
        this.id=ID;
    }
    info(){
        console.log(`Person NAme is ${this.name},age is ${this.age},Salary is ${this.salary} and ID is ${this.id}`);
    }
}
export class Access extends Person{
    constructor(){
        super();
        
    }
   
}
let check1=new Person("Muhammad Haris Khan",24,40000,30);
check1.info();
