const CardRepository = require('../repositories/CardRepository');

class CardController {
    constructor() {
        this.CardRepository = new CardRepository();
    }

    findAll = async (req, res) => {
        try {
            const Cards = await this.CardRepository.findAll();
            res.json(Cards);
        } catch(err) {
            console.log(err);
            res.status(500).json({ message: 'Error fetching Cards' });
        }
    }

    findOne = async (req, res) => {
        try {
            const Card = await this.CardRepository.findOne(req.params.id);
            if (!Card) {
                res.status(404).json({ message: 'Card not found' });
            } else {
                res.json(Card)
            }
        } catch(err) {
            console.log(err);
            res.status(500).json({ message: 'Error fetching Card' });
        }
    }

    create = async (req, res) => {
        console.log('REQ', req.body);
        try {
            const Card = await this.CardRepository.create(req.body);
            res.json(Card); 
        } catch(err) {
            console.log(err);
            res.status(500).json({ message: 'Error creating Card' });
        }
    }

    update = async (req, res) => {
        try {
            const Card = await this.CardRepository.update(req.params.id, req.body);
            res.json(Card);
        } catch(err) {
            console.log(err);
            res.status(500).json({ message: 'Error updating Card' });
        }
    }

    delete = async (req, res) => {
        try {
            await this.CardRepository.delete(req.params.id);
            res.json({ message: 'Card deleted successfully' });
        } catch(err) {
            console.error(error);
            res.status(500).json({ message: 'Error deleting Card' });
        }
    }
}

module.exports = CardController;