const Sequilize = require('sequelize')
const Users = require('../apps/models/Users')
const Messages = require('../apps/models/Messages')

const models = [Users, Messages]
const databaseConfig = require('../configs/db')

class Database {
    constructor() {
        this.init()
    }

    init() {
        this.connection = new Sequilize(databaseConfig)

        models
            .map((model) => model.init(this.connection))
            .map(model => model.associate && model.associate(this.connection.models))
    }
}

module.exports = new Database()