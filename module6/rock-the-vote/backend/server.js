const express = require("express")
const app = express()
require("dotenv").config()
const morgan = require("morgan")
const mongoose = require("mongoose")
const PORT = 9000
const authRouter = require("../backend/routes/authRouter")
const expressJwt = require("express-jwt")

app.use(express.json())
app.use(morgan("dev"))

mongoose.connect("mongodob://localhost:27017/votesdb",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},
    () => console.log("connected to the db!")
)

app.use("/auth", authRouter)
app.use("/api", expressJwt({ secret: process.env.SECRET, algorithms: ['HS256']}))

app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})


app.listen(PORT, () => {
    console.log(`port ${PORT}, we in there!`)
})
