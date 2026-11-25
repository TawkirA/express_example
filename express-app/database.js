const { Sequelize } = require('sequelize');
const dbConfig = require('./config/dbConfig');

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  operatorAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

sequelize.authenticate()
  .then(() => {
    console.log('Connected to the database!');
})  .catch(err => {
    console.error('Error connecting to the database:', err);
});

sequelize.sync().then(() => {
  console.log('Tables created');
}).catch((err) => {
  console.error('Error creating tables:', err);
});

module.exports = sequelize;
