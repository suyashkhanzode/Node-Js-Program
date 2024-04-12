const http = require("http");
const fs = require('fs');

let server = http.createServer((req, res) => {
  let url = req.url;
  const method = req.method;
  let text;
  if (url == "/home") {
    res.setHeader("Content-Type", "text/html");
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write(`<body><form action="/message" method="POST"><text>${text}</text><input type="text" name="message"><button type="submit">Send</button></form></body>`);
    res.write('</html>');
    return res.end();
  }
  
  if (url == '/message' && method == 'POST') {
    const body = [];
    req.on('data', chunk => {
     
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
       text = parsedBody.split('=')[1];
       fs.writeFile('message.txt', text, err => {
       
      });
      res.setHeader("Content-Type", "text/html");
      res.write('<html>');
      res.write('<head><title>Enter Message</title><head>');
      res.write(`<body><form action="/message" method="POST"><text>${text}</text><input type="text" name="message"><button type="submit">Send</button></form></body>`);
      res.write('</html>');
      return res.end();
     
    });
  }

});

server.listen(4000);
