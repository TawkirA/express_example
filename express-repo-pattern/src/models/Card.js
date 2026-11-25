const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Card = sequelize.define('Card', {
    cardId: { type: Sequelize.STRING, allowNull: true, len: [0, 36] },
cType: { type: Sequelize.STRING, allowNull: true, len: [0, 36] },
desc: { type: Sequelize.STRING, allowNull: true, len: [0, 3000] }
})

module.exports = Card;

