const express = require("express")
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")
const authorRouter = require("./routes/authorRouter")
const bookRouter = require("./routes/bookRouter")

// middleware
app.use(express.json())
app.use(morgan("dev"))

// connect to DB
mongoose.connect("mongodb://localhost:27017/booksdb",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true
    },
    () => console.log("connected to the db")
)

// routes

app.use("/books", bookRouter)
app.use("/authors", authorRouter)

// error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

// port
app.listen(9000, () => {
    console.log("port 9000, we in there!")
})