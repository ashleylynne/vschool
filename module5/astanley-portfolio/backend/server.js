const express = require("express")
const app = express()
const PORT = 9000
const morgan = require("morgan")
const mongoose = require("mongoose")
const userRouter = require("./routes/userRouter")

// middleware
app.use(express.json())
app.use(morgan("dev"))

// connect to mongodb
mongoose.connect("mongodb://localhost:27017/ashdb",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},

() => console.log("connected to the db yurrrrrp!")
)

// route
app.use("/ash", userRouter)

// error message
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

// server port running
app.listen(PORT, () => {
    console.log(`port ${PORT} baby let's get it!!`)
})