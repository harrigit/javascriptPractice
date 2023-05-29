const fs=require("fs");

// fs.readFile('./Files/DataSet.txt',(err,data)=>{
//     if (err){
//         console.log(err);
//     }
//     console.log(data.toString());

// })
//you can Use blow (('./Files/DataSet.txt', {encoding:utf8}); if you USed This Then ToString() Is Not Required Ok
//ReadStream
const readstream=fs.createReadStream('./Files/DataSet.txt');



readstream.on('data',(chunk)=>{
    console.log("------New Chunk--------");
    console.log(chunk.toString());
    
})

//piping Stream
const writestream=fs.createWriteStream('./Files/DataStream.txt');
readstream.pipe(writestream);