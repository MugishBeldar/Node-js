// COURSES RETURN A FULL ARRAY NOW WE HAVE TO ACCESS ONLY ONE VARIABLE THEN ROUTING IS USED

const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.write('hello this is home pages');
    res.end();
})
app.get('/about', (req, res) => {
    res.write('hello this is about page')
    res.end();
})
app.get('/contact', (req,res) => {
    res.write("hello this is contact page");
    res.end();
})
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on post ${port}...`))