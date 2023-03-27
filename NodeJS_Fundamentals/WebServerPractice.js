const http = require('http');
const fs=require('fs');
const hostname = '127.0.0.1';
const port = 4000;
const NewServer = http.createServer((req, res) => {
    //Set Headers Content-type:
    res.setHeader('Content-Type', 'text/Html');

fs.readFile('./index.html', (err, data)=>{
    if (err){
        console.log(err);
    }
    else {
        res.write(data);
        res.end();
    }
})
    // res.write('<h1>Hello HARIS NIAZI<h1>');
    // res.end("Hello From My New Practice Server");
});
NewServer.listen(port, hostname, () => {
    console.log(`Listening on this Link http://${hostname}:${port}/`);
});
