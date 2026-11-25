const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Loan = sequelize.define('Loan', {
    loanId: { type: Sequelize.STRING, allowNull: true, len: [0, 36] },
lType: { type: Sequelize.STRING, allowNull: true, len: [0, 36] },
desc: { type: Sequelize.STRING, allowNull: true, len: [0, 3000] }
})

module.exports = Loan;

