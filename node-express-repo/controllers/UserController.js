const UserRepository = require('../repositories/UserRepository');

const userRepository = new UserRepository();

class UserController {
    async findAll(req, res) {
        try {
            const users = await userRepository.findAll();
            res.json(users);
        } catch(error) {
            console.log(error);
            res.status(500).json({ message: 'Error fetching users' });
        }
    }

    async findById(req, res) {
        try {
          const id = req.params.id;
          const user = await userRepository.findById(id);
          if (!user) {
            res.status(404).json({ message: 'User not found' });
          } else {
            res.json(user);
          }
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Error fetching user' });
        }
    }

    async create(req, res) {
        try {
          const user = req.body;
          const newUser = await userRepository.create(user);
          res.json(newUser);
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Error creating user' });
        }
    }

    async update(req, res) {
        try {
          const id = req.params.id;
          const user = req.body;
          await userRepository.update(id, user);
          res.json({ message: 'User updated successfully' });
        } catch (err) {
          console.error(err);
          res.statu(500).json({ message: 'Error updating user' });
        }
    }

    async delete(req, res) {
        try {
          const id = req.params.id;
          await userRepository.delete(id);
          res.json({ message: 'User deleted successfully' });
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Error deleting user' });
        }
    }
}

module.exports = UserController;