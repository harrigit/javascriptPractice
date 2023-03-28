const http=require('http');

const hostname = '127.0.0.1'

http.createServer((req, res)=>{
    res.end("Hello This IS a Test Server");
    console.log("I am Creating Server")
}).listen(8000,hostname,()=>{
    console.log(`I am Listening on http://${hostname}:8000`);
});
