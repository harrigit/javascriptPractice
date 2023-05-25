const fs=require("fs");


//Reading Files
setTimeout(()=>{
    fs.readFile("./Files/Names.txt",(err,data)=>{
        if(err){
            console.log(err);
        }
        console.log(data.toString());
    })
    

},5000);

//Writing Files
fs.writeFile("./Files/Names.txt","Your Name Is Uzair Don",()=>{
    console.log("Your File Is Updated Check Your File");
    console.log("Wait I am Checking File......here Is Your Result Wait for 5 sec");
})


//Directories
//Make Directory
fs.mkdir("./Names2",(err)=>{
    if(err){
        console.log(err);
    }
    console.log("your Folder Is Created Check Please");
})
fs.writeFile("./Names2/TestingFiles.txt","",()=>{
    console.log("Done File Created");
})





//Deleting Files



