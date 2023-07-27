// HANDLING HTTP PUT METHOD 

const Joi = require('joi')
const express = require('express');
const app = express();
app.use(express.json());


const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
]


app.get('/', (req,res) => {
    res.send('home page');
})

app.get('/api/courses',(req, res) => {
    res.send(courses);
});

app.post('/api/courses', (req, res) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    const result = schema.validate(req.body);

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


// HANDLING PUT METHOD AND LOGIC OF PUT METHOD
app.put('/api/courses/:id', (req, res)=> {
    // LOOK UP THE COURSE
    // IF NOT EXISTING, RETURN 404

    // VALIDATE
    // IF INVALID, RETURN 400 - BAD REQUEST

    // UPDATE COURSE

    // RETURN THE UPDATE COURSE

    const course = courses.find(c => c.id === parseInt(req.params.id))
    if(!course) res.status(404).send('the course is not found');

    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    const result = schema.validate(req.body);
    if(result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    course.name = req.body.name;
    res.send(course);
})

app.listen(4000);

