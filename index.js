const http = require("http");

let server = http.createServer((req, res) => {
  let url = req.url;

  if (url == "/home") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><head>");
    res.write("<body><h1>Welcome home</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (url == "/about") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><head>");
    res.write("<body><h1>Welcome to About Us page</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (url == "/node") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><head>");
    res.write("<body><h1>Welcome to my Node Js project</h1></body>");
    res.write("</html>");
    return res.end();
  }
});

server.listen(4000);
