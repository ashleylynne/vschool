const express = require("express")
const app = express()
// const kickRouter = require("./kickRouter")


app.use(express.json())
// app.use("/kicks", kickRouter)

// middleware practice
app.use("/kicks", (req, res, next) => {
    console.log("THE KICKS MIDDLWARE IS UP")
    next()
})

app.get("/kicks", (req, res, next) => {
    console.log("GET REQUEST RECIEVED")
    res.send("YUURRRRRP")
})

app.listen(9000, () => {
    console.log("hey im running on 9000!")
})
