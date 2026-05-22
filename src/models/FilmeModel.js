const connection = require("../database/conenection")

const FilmeModel = {

    async findAll() {
        const result = await connection.raw("SELECT * FROM filmes")

        return result
    },

    async create(data) {
        const {nome} = data 

        const result = await connection.raw(
            "INSERT INTO filmes (nome) VALUES (?)",
            [nome]
        )

        return result

    } ,

    async create(filme, generos) {
        const insereFilme = { titulo, diretorId } = filme

        await connection.raw(
            "INSERT INTO filmes (titulo, diretor_id) VALUES (?, ?)",
            [titulo, diretorId]
        )
       const filmeId = insereFilme.lastID
       
       if( generos && generos.length > 0){
        for( const generoId of generos){
            await connection.raw(
                "INSERT INTO filme_genero (filme_id, genero_id) VALUES (?, ?)",
                [filmeId, generoId]
            )
        }
       }
       return filmeId
    },

    async findById(id){

        const filmeResult = await connection.raw(
            "SELECT * FROM filme WHERE id = ?", [id]
        )
        const filme = filmeResult[0]

        if (!filme) return null

         const generos = await connection.raw(`
        SELECT g.id, g.nome FROM generos g
        JOIN filmes_generos fg ON g.id = fg.genero_id
        WHERE fg.filme_id=?
        `, [id])

    return {
        ...filme,
        generos
    }
    },

   



}

module.exports = FilmeModel

