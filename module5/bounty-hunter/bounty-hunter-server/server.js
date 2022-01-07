// Part 1 - Server Setup and GET & POST routes

const express = require("express")
const bountyRouter = require("./bountyRouter")
const authRouter = require("../bounty-hunter-server/routes/authRouter")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
const PORT = 9000
require("dotenv").config()

// middleware
app.use(express.json())
app.use(morgan("dev"))

// connect to DB
mongoose.connect("mongodb://localhost:27017/bountiesdb", 
// to avoid depracation errors:
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},
() => console.log("Connected to the database!")
)

// routes
app.use("/auth", authRouter)
app.use("/bounties", bountyRouter)

// error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})

})

app.listen(PORT, () => {
    console.log(`running on port ${PORT}!`)
})
