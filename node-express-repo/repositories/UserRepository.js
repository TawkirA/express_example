const BaseRepository = require('./BaseRepository');
const User = require('../models/User');

// const userModel = User();

class UserRepository extends BaseRepository {
    constructor() {
        super(User)
    }
}

module.exports = UserRepository;