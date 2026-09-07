const http = require('http');
const  fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 8082;

const server = http.createServer((req, res) => {
    if (req.url === '/hello.html')  {
	fs.readFile(path.join(__dirname, 'hello.html'), (err, data) => {
		res.statusCode = 200;
		res.setHeader('COntent-Type', 'text/html');
		res.end(data);
    }); } else {
	  res.statusCode = 200;
	  res.setHeader('Content-Type', 'text/plain');
	  res.write('Hello World. My name is Peter Mansbacher');
	  res.write(' ');
	  res.end('This is part of my lab 3 modification');
   }

});

server.listen(port, hostname, () => {
	  console.log(`Server running at http://${hostname}:${port}/`);
});

