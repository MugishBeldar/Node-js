// HANDLING HTTP POST REQUEST WITH INPUT VALIDATION 

// for input validation joi npm package is use return type is class
const Joi = require('joi');

const express = require('express');
const app = express();


// FOR POST METHOD 
app.use(express.json());
 
const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
]

app.get('/',(req, res) => {
    res.send('home page')
});

app.get('/api/courses',(req, res) => {
    res.send(courses);
    // console.log(req.body);
});

// POST METHOD USE EXPRESS.JSON METHOD
app.post('/api/courses', (req, res) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    // const result = Joi.validate(req.body, schema);
    const result = schema.validate(req.body);
    console.log(result);

    // WITHOUT JOI VALIDATION IT IS USED
    // if(!req.body || req.body.name.length < 3) {
    //     res.status(400).send("Name is required and should be minimum 3 character");
    //     return;
    // }

    //  WITH JOI VALIDATION 
    if(result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }
    const course = {
        id: (courses.length+1),
        name: req.body.name
    }
    courses.push(course);
    res.send(course)
})


app.get('/api/courses/:id',(req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if(!course) res.status(404).send('the course is not found');
    res.send(course);
    // res.send(course);
});


app.listen(3000, ()=> console.log('listening on 3000'))