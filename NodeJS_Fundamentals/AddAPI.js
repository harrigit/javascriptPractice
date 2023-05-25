const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    console.log(req,url)
  const { pathname, query } = url.parse(req.url, true);
  const { num1, num2 ,Name} = query;

  if (pathname === '/add') {
    const result = (Name +" Sum is =")+ (parseInt(num1) + parseInt(num2));
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ result }));
    console.log(result);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>Page Not Found</h1>');
  }
});

server.listen(3000, '127.0.0.1', () => {
  console.log(`Server listening on port 3000`);
});
