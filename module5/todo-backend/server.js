const express = require("express")
const app = express()
const todosRouter = require("./router")
const PORT = 9000

app.use(express.json())
    
app.use("/album-todos", todosRouter)

app.use((req, res, next)=>{
    console.log("middleware executed!")
    next()
})

app.listen(PORT, () => {
    console.log(`port ${PORT}, we in there!`)
})
