// HANDLING HTTP POST REQUEST 
const exprss = require('express');
const app = exprss();

// FOR POST METHOD 
app.use(exprss.json());

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 2, name: 'course3'}
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
    const course = {
        id: courses.length + 1,
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