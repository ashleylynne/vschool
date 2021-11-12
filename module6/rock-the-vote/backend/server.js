const express = require("express")
const app = express()
require("dotenv").config()
const morgan = require("morgan")
const mongoose = require("mongoose")
const PORT = 9000
const authRouter = require("../backend/routes/authRouter.js")
const commentRouter = require("../backend/routes/commentRouter.js")
const expressJwt = require("express-jwt")

app.use(express.json())
app.use(morgan("dev"))

mongoose.connect("mongodb://localhost:27017/user-authentication",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},
    () => console.log("connected to the db!")
)

app.use("/auth", authRouter)
app.use("/api", expressJwt({ secret: process.env.SECRET, algorithms: ['HS256']})) //req.user
app.use("/api/comments", commentRouter)

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
