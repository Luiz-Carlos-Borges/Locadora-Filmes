const GeneroModel = require("../models/GeneroModels")

const GeneroControler = {
    async getAllGeneros (req,res) {
        const generos = await GeneroModel.findAll()

        return res.json(generos)

    },
    async createGenero (req,res) {
        const {nome} = req.body

        const generos = await GeneroModel.create({nome})

        return res.status(201).json(generos)

    },
}

module.exports = GeneroControler