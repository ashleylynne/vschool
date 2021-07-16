const express = require("express")
const app = express()
const middleware = require("./middleware")
const PORT = 9000

app.listen(PORT, () => {
    console.log(`port ${PORT}, we in there!`)
})

