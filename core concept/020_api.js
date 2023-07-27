const express = require('express');
const Joi = require('joi');
const app = express();
app.use(express.json());

const courses = [
    {id: 1, name: 'mkcourse1'},
    {id: 2, name: 'mkcourse2'},
    {id: 3, name: 'mkcourse2'},
]

app.get('/', (req, res)=> {
    res.send("this is a home page");
    res.end();
})

app.get('/courses', (req, res)=> {
    res.send(courses);
    res.end();
})

app.post('/courses', (req, res)=> {

    const schema = Joi.object({
        name: Joi.string().min(5).required()
    })

    const result = schema.validate(req.body);

    if(result.error) return res.status(400).send(result.error); 
    const course = {};
    course.id = courses.length +1;
    course.name = req.body.name;
    courses.push(course);
    res.send(course);
})

app.put('/courses/:id', (req, res)=> {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if(!course) {return res.status(404).send('the course is not found')};

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

app.delete('/courses/:id',(req,res)=>{
    const course = courses.find(c =>c.id===parseInt(req.params.id))
    if(!course) {return res.status(404).send('the course is not found')};
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course);
}) 
app.listen(4000);
