const BaseRepository = require('./BaseRepository');
const Card = require('../models/Card');

class CardRepository extends BaseRepository {
    constructor() {
      super(Card);
    }
}

module.exports = CardRepository;