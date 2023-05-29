const http=require('http');
const fs=require('fs');
const sever=http.createServer((req,res)=>{
    console.log("Resquest Made");
    //request object
    console.log(req.url,req.method);
    //response Object
    res.setHeader('content-type', 'text/html');
    fs.readFile('./View/index.html',(err,data)=>{
        if(err){
            console.log(err);
           // res.end();
        }else{
            //res.write(data);
            res.end(data);
        }
    })

})
sever.listen(4000,'localhost',()=>{
    console.log("Sever listenning On http://localhost:4000");
})