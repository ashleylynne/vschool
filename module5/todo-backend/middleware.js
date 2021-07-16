const express = require("express")
const app = express()
const todosRouter = require("./router")

module.exports = () => {
    app.use(express.json())
    
    app.use("/", todosRouter)

    app.use((req, res, next)=>{
        console.log("middleware executed!")
        next()
    })
    
}

