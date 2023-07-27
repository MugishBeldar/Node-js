// // import { createServer } from 'http';
const http = require('http');

let server = http.createServer((req, resp) => {
    resp.write("endpoint");
    // resp.end();
});
server.listen(5000, "127.0.0.1" ,() => {
    console.log('listening');
});






// make request via http
// to request http.request() method used take one object and one callback function as arguments 

// const http = require('http');

let options = {
    host:"training.rapidops.com",
    path : "/index",
    method : "GET" 
}

const request = http.request(options, (resp) => {
    console.log(`status is ${resp.statusCode}`);
    console.log(`status is ${resp.headers}`);
    console.log(`status is ${resp.setEncoding('UTF-8')}`);
})
request.end();
