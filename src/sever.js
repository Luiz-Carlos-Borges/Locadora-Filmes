const app = require("./app")

const SEVER_PORT = 3000

app.listen(SEVER_PORT, () => {
    console.log(`API em http://localhost:${SEVER_PORT}`)
})