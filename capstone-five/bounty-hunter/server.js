// const express = require("express")
// const bountyRouter = require("../bounty-hunter/bountyRouter.js")
// const app = express()
// const morgan = require("morgan")
// const mongoose = require("mongoose")

// // middleware
// app.use(express.json())
// app.use(morgan("dev"))

// // connect to DB
// mongoose.connect("mongodb://localhost:27017/bountiesdb", 
// // to avoid depracation errors:
// {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// },
// () => console.log("Connected to the database!")
// )

// // route
// app.use("/bounties", bountyRouter)

// // error handler
// app.use((err, req, res, next) => {
//     console.log(err)
//     return res.send({errMsg: err.message})

// })

// app.listen(9000, () => {
//     console.log("hey im running on 9000!")
// })