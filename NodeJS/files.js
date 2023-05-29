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
fs.writeFile("./Files/Names.txt","Your Name Is Uzair Don Am I Right!",()=>{
    console.log("Your File Is Updated Check Your File");
    console.log("Wait I am Checking File......here Is Your Result Wait for 5 sec");
})


//Directories
//Make Directory
//First This Checking Folder Is in The Directory are Not 
if(!fs.existsSync('./Names3')){
    fs.mkdir("./Names3",(err)=>{
        if(err){
            console.log(err);
        }
        console.log("your Folder Is Created Check Please");
    })

}
//This Removing Folder
else{
    fs.rmdir("./Names3",(err)=>{
        if(err){
            console.log(err);
        }
        console.log("Folder Deleted check Please");
    })
}

fs.writeFile("./Names2/TestingFiles.txt","",()=>{
    console.log("Done File Created");
})

//Deleting Files
if (fs.existsSync('./Names2/Deleteme.txt')){
    fs.unlink('./Names2/Deleteme.txt',(err)=>{
        if(err){
            console.log(err);
        }
        console.log("Done Deleted");
    }
)}
else{
    console.log("File Is Not Present In Dirctory");
}



