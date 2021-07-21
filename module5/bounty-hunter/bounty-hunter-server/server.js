// Part 1 - Server Setup and GET & POST routes

const express = require("express")
const bountyRouter = require("./bountyRouter")
const app = express()
const morgan = require("morgan")

app.use(express.json())
app.use(morgan("dev"))

// middleware
app.use("/bounties", bountyRouter)


app.listen(9000, () => {
    console.log("hey im running on 9000!")
})
