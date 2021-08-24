const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
const router = require("./routes/inventory.js")

// middleware
app.use(express.json())
app.use(morgan("dev"))

// connect to DB
mongoose.connect("mongodb://localhost:27017/inventorydb", 
// to avoid deprecation errors
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: false,
        useFindAndModify: true
    },
    () => console.log("connected to the db!")
)

// route
app.use("/inventory", router)

// error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log("port 9000, we in there!")
})