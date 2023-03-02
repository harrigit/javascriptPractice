//Class ma 2 chezain hoti hain Methods And properties

class hello{
    
   hello1(){//This is  a method 
    console.log("hello ji");
   }

}
//is Class ka object Banan ha Jis Sa Hum Is Class ka andar wali cheezoon ka access kr sakta hain
let a=new hello();
a.hello1();
//In Classes there are 3 Kinds of Method in the Class
//1 is Constructor method 2 is Prototype Method And LAst is Static Method 
//Constructor Method, Static Method And Prototype Method Example 

class Student{
    constructor(Name,Age,Gender){//This is a constructor method 
      this.studentName=Name;
      this.studentAge=Age;
      this.StudentGender=Gender;
        console.log("Checking Student Data");
    }
    CheckName(){//This is a prototype method 
        console.log(`My Name is ${this.studentName},My Age is ${this.studentAge} And My Sex is ${this.StudentGender}`);
    }
    static StaticMethod(){//we Cannot Call Static Method With Object Name We Call This Function With Class Name See 
        console.log("we Cannot Call Static Method With Object Name We Call This Function With Class Name See  Method");
    }

}
let Stu=new Student("Muhammad Haris Khan",24,"Male");

Stu.CheckName();
Student.StaticMethod();
