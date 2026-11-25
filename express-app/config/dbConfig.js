module.exports = {
    database: 'repo-test',
    username: 'root',
    password: 'microSoft@1',
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
