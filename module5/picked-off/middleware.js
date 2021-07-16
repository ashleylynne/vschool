const express = require("express")
const app = express()

module.exports = () => {

    app.use(express.json())

    app.use("/", (req, res, next) => {
        console.log("ZE MIDDLEWARE WAS EXECUTED SANK YOU VEDDY MUCH")
        next()
    })
}

