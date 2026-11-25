class BaseRepository {
    constructor(model) {
        console.log('BaseRepository constructor:', model);
        this.model = model;
    }

    async findAll() {
        return this.model.findAll();
    }

    async findById(id) {
        return this.model.findByPk(id);
    }

    async create(data) {
        console.log('this.model:', this.model);
        return this.model.create(data);
    }

    async update(id, data) {
        return this.model.update(data, { where: { id } });
    }

    async delete(id) {
        return this.model.destroy({ where: { id } });
    }
}

module.exports = BaseRepository;