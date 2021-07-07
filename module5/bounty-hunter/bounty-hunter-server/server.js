// Part 1 - Server Setup and GET & POST routes

const express = require("express")
const bountyRouter = require("./bountyRouter")
const app = express()


// middleware
app.use(bountyRouter)

app.listen(9000, () => {
    console.log("hey im running on 9000!")
})