const fs=require('fs');
//We Can Read Stream Write Stream ANd Many Thhings
const readStream=fs.createReadStream('./Files/DataSet.txt');




readStream.on('data', (Chunk)=>{
    
    console.log("---------NewChunk----------");
    console.log(Chunk.toString());
})