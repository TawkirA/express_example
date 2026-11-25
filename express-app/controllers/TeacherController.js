// const Teacher = require('../models/Teacher');
const oracledb = require('oracledb');

const TeacherController = {  
  async initDB(req, res) {
    try {
      await oracledb.initOracleClient();
      console.log('DB initialted successfully');
      try {
        const pool = await oracledb.createPool({
          user: '',
          password: '',
          connectionString: '',
          thinMode: false
        });

        return pool;
      } catch (error) {
        console.log(`Error connecting DB - ${error}`)
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  },

  // async addTeacher(req, res) {
  //   console.log('MODEL - ', Teacher);
  //   const teacher = await Teacher.create(req.body);
  //   res.json(teacher);
  // },  

  async getAllTeachers(req, res) {
    // const users = await Teacher.findAll();
    // res.json(users);

    const pool = await initDB();
    console.log('POOL', pool);

    // SQL COMMAND
    let sql = `SELECT "value" FROM "META"."Values" WHERE "name"="SCHEMA_VERSION"`;
    const result = await pool.execute(sql);
    console.log('RES', result);
  },

  // async getTeacherById(req, res) {
  //   const id = req.params.id;
  //   const user = await Teacher.findByPk(id);
  //   if (!user) {
  //     res.status(404).send('User not found');
  //   } else {
  //     res.json(user);
  //   }
  // }
};

module.exports = TeacherController;
