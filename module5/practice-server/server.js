const express = require("express")
const app = express()
const mongoose = require("mongoose")
const router = require("./router")
const PORT = 9000
const morgan = require("morgan")

app.use(express.json())
app.use(morgan("dev"))

app.use("/items", router)

mongoose.connect("mongodb://localhost:9000/itemsdb",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
        
    }, () => console.log("database babyyyyyy!")
)

app.listen(PORT, () => {
    console.log(`ayo it's port ${PORT}`)
})