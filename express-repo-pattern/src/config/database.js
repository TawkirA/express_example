const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('repo-test', 'root', 'microSoft@1', {
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = sequelize;