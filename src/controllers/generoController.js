const GeneroModel = require("../models/GeneroModels")

const GeneroControler = {
    async getAllGeneros (req,res) {
        const generos = await GeneroModel.findAll()

        return res.json(genero)

    },
    async createGenero (req,res) {
        const {nome} = req.body

        const genero = await GeneroModel.create({nome})

        return res.ststus(201).json(genero)

    },
}

module.exports = GeneroControler