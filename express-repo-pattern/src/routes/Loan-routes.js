const express = require('express');
const LoanController = require('../controllers/LoanController');

const LoanCtrl = new LoanController();

const router = express.Router();

router.get('/', LoanCtrl.findAll);
router.get('/:id', LoanCtrl.findOne);
router.post('/', LoanCtrl.create);
router.put('/:id', LoanCtrl.update);
router.delete('/:id', LoanCtrl.delete);

module.exports = router;
