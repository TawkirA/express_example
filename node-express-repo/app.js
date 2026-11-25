const express = require('express');
const cors = require('cors');
// const sequelize = require('./models');
// const { Sequelize } = require('sequelize');
// const config = require('./config/database');
const app = express();
// const routes = require('./routes/User');

var corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// app.use('/api', routes);

// Connect DB
const db = require("./models");

db.sequelize.sync()
    .then(() => {
        console.log('DB Synced');
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});    

require("./routes/tutorial.route")(app);

// const sequelize = new Sequelize('repo-test', 'root', 'microSoft@1', {
//     host: 'localhost',
//     dialect: 'mysql'
// });
// console.log('SEQ', sequelize);

// sequelize.sync().then(() => {
//     console.log('DB Connected!');
//     sequelize.sync();    
// }).catch(err => {
//     console.log('Error', err);
// })

// const User = require('./models/User');
// const userModel = User.init(sequelize);

// // Create an instance of the UserRepository
// const UserRepository = require('./repositories/UserRepository');
// const userRepository = new UserRepository(userModel);

// app.use(express.json());

app.get('/users', async (req, res) => {
    try {
      const users = await userRepository.findAll();
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error fetching users' });
    }
});
  
//   app.get('/users/:id', async (req, res) => {
//     try {
//       const id = req.params.id;
//       const user = await userRepository.findById(id);
//       if (!user) {
//         res.status(404).json({ message: 'User not found' });
//       } else {
//         res.json(user);
//       }
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ message: 'Error fetching user' });
//     }
//   });

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
