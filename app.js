const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head>Welcome to my Node Js project</head>");
    res.write("</html>");
  }
  if (req.url == "/home") {
    res.write("<html>");
    res.write("<head>Welcome  home</head>");
    res.write("</html>");
  } else if (req.url == "/about") {
    res.write("<html>");
    res.write("<head>Welcome to about us page</head>");
    res.write("</html>");
  } else if (req.url == "/node") {
    res.write("<html>");
    res.write("<head>Welcome to my Nodejs project</head>");
    res.write("</html>");
  } else if (req.url == "/home") {
    res.write("<html>");
    res.write("<head>Welcome to my Node Js project</head>");
    res.write("</html>");
  }
  res.end();
});
server.listen(3000);
