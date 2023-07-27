// SET OF ENVIRONMENT VARIABLE
// WE CAN NOT RELAY ON 5000 PORT NO EVERY TIME IT SOME TIME BUSY SO WE USE ENVIRONMENT VARIABLE
let express = require('express');
let app = express();  // return objects of method

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/api/courses', (req, res) => {
    res.send([1,2,3,4]);
});
app.get('/api/courses/:id', (req, res) => {
    res.send((req.params.id));
});
// app.get('/api/post/:year/:month', (req, res) => {
//     res.send((req.params));
// })

//FRO READING QUERY PARAMETERS 
app.get('/api/post/:year/:month', (req,res) => {
    res.send((req.query))
})
// method of routing 
// app.post()
// app.put()
// app.delete()


app.listen(5000, ()=> {console.log('listen port 5000')});
// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`listening on post ${port}...`))
// app.listen