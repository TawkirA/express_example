const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();

const UserCtrl = new UserController(); 

router.get('/users', UserCtrl.findAll);
router.get('/users/:id', UserCtrl.findById);
router.post('/users', UserCtrl.create);
router.put('/users/:id', UserCtrl.update);
router.delete('/users/:id', UserCtrl.delete);

module.exports = router;
