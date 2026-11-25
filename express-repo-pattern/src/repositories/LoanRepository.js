const BaseRepository = require('./BaseRepository');
const Loan = require('../models/Loan');

class LoanRepository extends BaseRepository {
    constructor() {
      super(Loan);
    }
}

module.exports = LoanRepository;