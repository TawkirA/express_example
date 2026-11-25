const express = require('express');
const TeacherController = require('../controllers/TeacherController');

const router = express.Router();

router.get('/', TeacherController.getAllTeachers);
// router.post('/', TeacherController.addTeacher);
// router.get('/:id', TeacherController.getTeacherById);


module.exports = router;

