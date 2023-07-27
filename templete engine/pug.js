const express = require('express');
const app = express();

app.set("view engine" ,"pug");
app.set("views", "./view");

app.get('/',(req,res)=> {
    res.render('index', {title : "pug templete", h1 : "hello"});
}).listen(4040);