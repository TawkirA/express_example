const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product', {
    pid: { type: Sequelize.STRING, allowNull: false, len: [0, 36] },
cid: { type: Sequelize.STRING, allowNull: false, len: [0, 36] },
description: { type: Sequelize.STRING, allowNull: false, len: [0, 3000] }
})


module.exports = Product;

