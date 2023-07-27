// use for building resfull apis
// fast and light weight for bulding application

let express = require('express');
let app = express();  // return objects of method

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/api/courses', (req, res) => {
    res.send([1,2,3,4]);
});
// app.post()
// app.put()
// app.delete()

app.listen(5000, ()=> {console.log('listen port 3000')});



