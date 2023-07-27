const http = require('http');

http.createServer((req, resp) => {
    if(req.url === '/')  {
        resp.write("home page");
        resp.end();
    }
    if(req.url == '/about')  {
        resp.write('about page')
        resp.end();
    }
}).listen(5000);