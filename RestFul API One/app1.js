const express = require("express")
const app = express()
const port = process.env.PORT || 3000
require("./db/conn")

const MensRanking =  require("./models/mens")
// const router = require("../src/routers/men") // ya
const router = require("./routers/men")

// middleware json
app.use(express.json())

// router middleware
app.use(router);

app.listen(port, () => {
    console.log(`listening on the server ${port}`)
})
