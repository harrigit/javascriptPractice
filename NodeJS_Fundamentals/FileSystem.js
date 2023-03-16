//File System in Node Js
//Reading Files In Node
const fs = require('fs');
// console.log(__filename);
fs.readFile('./Files/Information.txt', (err,Data)=>
    {
        if(err){
            console.error(err);
        }
        //Sirf Data :Likhna Sa Buffer Ajata ha to Hum Sath ToString Ka Function Call Krta hain
        console.log(Data.toString());
})


///Writing In File In Node Js
//fs.writeFile This will Replece Your File Information With New Information bur Append With Edit Your File Add Information
fs.appendFile('./Files/Information.txt','My Information', ()=>{
    console.log("File is Written ")
})


///Directaries
if (!fs.existsSync('./Files/Assest')){
    fs.mkdir('./Files/Assest', (err)=>{
        if(err){
            console.error(err);
        }
        
        })
}
else{
    fs.rmdir('./Files/Assest', (err)=>{
        console.log("Deleted");
    });
}


//Delete File In Node JS 
//unlink method is used To Delete A File In Node JS

fs.rmdir('./Files/Assest',()=>{
    console.log("Deleted ")
})

fs.unlink('./Files/dELETEME.txt',()=>{
    console.log("File Is Deleetd using UnLink Method");
})