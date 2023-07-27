// HANDLING HTTP GET METHODS
const exprss = require('express');
const app = exprss();

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

});

app.get('/api/courses/:id',(req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if(!course) res.status(404).send('the course is not found');
    res.send(course);
    
});


app.listen(3000, ()=> console.log('listening on 3000'))