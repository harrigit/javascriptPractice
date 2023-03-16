//modules In Node JS
const Acess=require('./People');
//if we Want to Access Values ion File Of People.js Then Implement This
console.log(Acess);
//if I want To Acess One Then 
//console.log(Acess.Ages[2]);


 ///Also Another Method Of All This is Below And Also this Is Most Useable in NODE JS
 const {Devlopers , Scale}=require('./People');
 console.log(Devlopers,Scale);