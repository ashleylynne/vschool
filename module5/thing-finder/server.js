const express = require("express")
const app = express()
const kickRouter = require("./kickRouter")


app.use(express.json())
app.use("/kicks", kickRouter)

app.listen(9000, () => {
    console.log("hey im running on 9000!")
})
