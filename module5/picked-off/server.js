const express = require("express")
const app = express()
const middleware = require("./middleware")

app.get("/", (req, res, next) => {
    console.log("GET REQUEST RECIEVED BITCH")
    res.send("YUUUURRRRRPP")
})

app.listen(9000, () => {
    console.log("bitch this is port 9000 territory period")
})
