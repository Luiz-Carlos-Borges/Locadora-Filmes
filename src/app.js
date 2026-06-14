const express = require("express")

const testRoutes = require("./routes/testRoutes")
const generoRoutes = require('./routes/generoRoutes')
const filmeRoutes = require('./routes/filmeRoutes')
const diretorRoutes = require('./routes/diretorRouter')

const app = express()

app.use(express.json())

app.get("/", (req,res) => {
return res.send("API DA LOCADORA FUNCIONANDO!")
})

app.use("/test", testRoutes)
app.use('/generos', generoRoutes)
app.use('/filmes', filmeRoutes)
app.use('/diretores', diretorRoutes)

module.exports = app

