const express = require('express');
const CardController = require('../controllers/CardController');

const CardCtrl = new CardController();

const router = express.Router();

router.get('/', CardCtrl.findAll);
router.get('/:id', CardCtrl.findOne);
router.post('/', CardCtrl.create);
router.put('/:id', CardCtrl.update);
router.delete('/:id', CardCtrl.delete);

module.exports = router;
