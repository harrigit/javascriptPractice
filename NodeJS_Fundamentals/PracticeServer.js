const http=require('http');
const port=8000;
const  hostname='127.0.0.1';

http.createServer((req, res)=>{

    res.writeHead(200, {'Content-Type': 'text/plain'}); 
    res.end("This is a Test Server");
    console.log("I am Creating a Test Server");

}).listen(port,hostname, ()=>{
    console.log(`I am Listening on http://${hostname}:8000`);
    console.log(__dirname);//Directory Check Krna Ka liya 
    console.log(__filename);//File Check 
})
setInterval(function(){
    console.log("I am SetInterval and Excuted after 1000ms");
},1000)

setTimeout(function(){
    
    console.log("I am SetTimeout and Excuted After 3 Seconds");
},3000)