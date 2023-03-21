const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const pathname = req.url;
  if (pathname === '/' || pathname === '/hello') {
    res.end('Hello World!');
  } else if (pathname === '/name') {
    res.end('My name is Muhammad Haris Khan.');
  } else if (pathname === '/api') {
    fs.readFile('./data.json', (err, data) => {
      if (err) {
        console.log(err);
        res.writeHead(500, {'Content-Type': 'text/html'});
        res.end('<h1>Internal Server Error</h1>');
      } else {
        const jsonData = JSON.parse(data);
        console.log(jsonData);
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(jsonData));
      }
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/html', 'MyOwnHeader': 'Hello World!'});
    res.end('<h1>Page Not Found</h1>');
  }
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server listening on port 3000');
});
