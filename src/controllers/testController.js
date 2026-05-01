const connection = require("../database/conenection")

const  testconection =  async (req, res) => {
    try{
    await connection.raw("SELECT 1+1 as result")

        return res.json({message:"Banco conectado com sucesso ( ͡° ͜ʖ ͡°)"})
    } catch(error) {
        return res.status(500).json({message: "Erro ao conectar ao banco ಠ_ಠ", 
        error:error
        })
    }
}

module.exports = {
    testconection
}