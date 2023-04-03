const http=require('http');
const port=8000;
const  hostname='127.0.0.1';

http.createServer((req, res)=>{
    res.end("This is a Test Server");
    console.log("I am Creating a Test Server");

}).listen(port,hostname, ()=>{
    console.log(`I am Listening on http://${hostname}:8000`);
})