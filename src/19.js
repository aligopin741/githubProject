// Example Node.js server-side code
const http = require('http');
const fs = require('fs');

let server;

function startServer(port) {
  if (server === null) {
    server = http.createServer((req, res) => {
      // Handle incoming requests
      const response = { status: '200 OK' };
      
      if (req.url === '/files') {
        fs.readFile('/tmp/file.txt', (err, data) => {
          if (err) {
            response.status = '500 Internal Server Error';
            res.writeHead(500, { 'Content-Type': 'text/plain' });
          } else {
            response.data = data;
            res.end(JSON.stringify(response));
          }
        });
      } else if (req.url === '/') {
        fs.readFile('/tmp/index.html', (err, data) => {
          if (err) {
            response.status = '500 Internal Server Error';
            res.writeHead(500, { 'Content-Type': 'text/plain' });
          } else {
            response.data = data;
            res.end(JSON.stringify(response));
          }
        });
      }

      // Handle errors
      if (response.status === undefined) {
        const error = new Error(`Server is not responding.`);
        error.status = 503; // Service Unavailable
        throw error;
      }

      response.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(response));
    }).listen(port, () => {
      console.log(`Server started on http://localhost:${port}`);
    });
  }
}

startServer(process.argv[2] || process.env.PORT);
