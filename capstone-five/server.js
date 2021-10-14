const express = require("express")
const app = express()
const PORT = 9000
const mongoose = require("mongoose")
const morgan = require("morgan")
const monsterRouter = require("./routes/monsterRouter")

app.use("/monsters", (req, res, next) => {
    console.log("MIDDLEWARE")
    next()
})

app.use(express.json())
app.use(morgan("dev"))


mongoose.connect("mongodb://localhost:9000/monstersdb",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    // autoIndex: false,
    useFindAndModify: false
}, () => console.log("connected to the db!")
)

// route
app.use("/monsters", monsterRouter)

// error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(PORT, () => {
    console.log(`port ${PORT}, we in there!`)
})

// bounty router test

// const express = require("express")
// const bountyRouter = require("./routes/monsterRouter")
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