let Counter = 20;
console.log(typeof(Counter))
Counter =20.4;
console.log(typeof(Counter))
Counter = false;
console.log(typeof(Counter))
Counter ="Check";
console.log(typeof(Counter))

let Employee = {
    Name : "Muhammad Haris Khan",
    id :10,
    Position: "QA",
    Country_Information :{
        CName : "Pakistan",
        City: "Lahore "

    }

}
console.log(Employee.Name)
console.log(Employee.Country_Information.CName)
console.log(Employee.Country_Information.City)

let amount = 21 + 22;
console.log(amount)

let Completed = true;
let runnng = false;
console.log(Completed)

let Error="An Error Occurs"
let haserror=Boolean(Error)
console.log(Error)
console.log(haserror)


let Name = "Muhammad Haris Khan";
let Position="QA";
let Current_City="Lahore";
console.log(Name.length)
console.log(Name[11])


let Person = {
    Name : "Usman Munir",
    Position: "QA",
    Company:"ICOMMUNIX"

};

console.log(Person.Name)

Person.Name="Uzair Nadeem"
console.log(Person.Name);
console.log(Person)
Person.Position="Frontend Developer"
console.log(Person)
Person.age = 26;
console.log(Person)

delete Person.age;
console.log(Person)

console.log("Name" in Person)