const LoanRepository = require('../repositories/LoanRepository');

class LoanController {
    constructor() {
        this.LoanRepository = new LoanRepository();
    }

    findAll = async (req, res) => {
        try {
            const Loans = await this.LoanRepository.findAll();
            res.json(Loans);
        } catch(err) {
            console.log(err);
            res.status(500).json({ message: 'Error fetching Loans' });
        }
    }

    findOne = async (req, res) => {
        try {
            const Loan = await this.LoanRepository.findOne(req.params.id);
            if (!Loan) {
                res.status(404).json({ message: 'Loan not found' });
            } else {
                res.json(Loan)
            }
        } catch(err) {
            console.log(err);
            res.status(500).json({ message: 'Error fetching Loan' });
        }
    }

    create = async (req, res) => {
        try {
            const Loan = await this.LoanRepository.create(req.body);
            res.json(Loan); 
        } catch(err) {
            console.log(err);
            res.status(500).json({ message: 'Error creating Loan' });
        }
    }

    update = async (req, res) => {
        try {
            const Loan = await this.LoanRepository.update(req.params.id, req.body);
            res.json(Loan);
        } catch(err) {
            console.log(err);
            res.status(500).json({ message: 'Error updating Loan' });
        }
    }

    delete = async (req, res) => {
        try {
            await this.LoanRepository.delete(req.params.id);
            res.json({ message: 'Loan deleted successfully' });
        } catch(err) {
            console.error(error);
            res.status(500).json({ message: 'Error deleting Loan' });
        }
    }
}

module.exports = LoanController;