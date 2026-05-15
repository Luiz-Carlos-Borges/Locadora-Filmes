const connection = require("../database/conenection")

const  testConection =  async (req, res) => {
    try{
    await connection.raw("SELECT 1+1 as result")

        return res.json({message:"Banco conectado com sucesso!!!"})
    } catch(error) {
        return res.status(500).json({message: "Erro ao conectar ao banco ಠ_ಠ", 
        error:error
        })
    }
}

const listTables = async (req, res) => {
    try {
        const tables = await connection.raw(   
            "SELECT name FROM sqlite_master WHERE type = 'table'"
        )

        return res.json(tables)
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {
    testConection,
    listTables
}