const connection = require("../database/conenection")

const GeneroModel = {

    async findAll() {
        const result = await connection.raw("SELECT * FROM generos")

        return result
    },

    async create(data) {
        const {nome} = data 

        const result = await connection.raw(
            "INSERT INTO generos (nome) VALUES (?)",
            [nome]
        )

        return result

    } 

}

module.exports = GeneroModel

