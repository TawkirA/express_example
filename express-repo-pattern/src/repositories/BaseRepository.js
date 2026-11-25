const sequelize = require('sequelize');

class BaseRepository {
    constructor(model) {
        this.model = model;
    }

    async findAll() {
        console.log('CHECK');
        // console.log('MODEL', this.model);
        // return this.model.find().exec();
        // return (async () => {
            return this.model.findAll();
        // })();
    }

    async findOne(id) {
        console.log('CHECK ID', id);

        return this.model.findByPk(id);
    }
    
    async create(data) {
        console.log('REQ DATA -', data);
        return this.model.create(data);
    }
    
    async update(id, data) {
        return this.model.update(data, { where: { id }});
    }
    
    async delete(id) {
        return this.model.destroy({ where: {id} });
    }
}

module.exports = BaseRepository;