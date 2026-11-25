const express = require('express');
const TeacherController = require('./controllers/TeacherController');
const app = express();

const teacherRoute = require('./routes/Teacher');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to my Express app!');
});

// app.post('/teachers', TeacherController.addTeacher)
// app.get('/teachers', TeacherController.getAllTeachers);
// app.get('/teachers/:id', TeacherController.getTeacherById);

app.use('/teacher', teacherRoute);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
