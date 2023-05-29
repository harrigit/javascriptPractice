const http=require('http');
const fs=require('fs');
const sever=http.createServer((req,res)=>{
    console.log("Resquest Made");
    //request object
    console.log(req.url,req.method);
    //response Object
    res.setHeader('content-type', 'text/html');
    let path='./View/';
    switch (req.url) {
        case '/':
            path+='index.html';
            res.statusCode=200;
            break;
        case '/about':
        path+='About.html';
        res.statusCode=200;
        break;
        case '/about-us':
        res.statusCode=301;
        res.setHeader('Location', '/about')
        res.end();
        default:
            path+='404.html';
            res.statusCode=404;
            break;

            
    
    }   

    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }
        else{
           
            res.end(data);
        }
    })
    

})
sever.listen(3000,'localhost',()=>{
    console.log("Sever listenning On Port:3000");
})