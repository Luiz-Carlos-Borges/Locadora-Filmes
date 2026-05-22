const FilmeModel = require("../models/FilmeModel")

const FilmeControler = {
    async getAllFilmes(req,res) {
        const filmes = await FilmeModel.findAll()

        return res.json(filmes)
    },
    async createFilme(req,res) {
        const {
            titulo,
            diretorId,
            generos
        } = req.body

        const filmeId = await FilemModel.create(
            {
                titulo,
                diretorId
            },
            generos
        )

        return res.status(201).json({ id: filmeId})
    }
}
module.export = FilmeController