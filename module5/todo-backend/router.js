const express = require("express")
const uuid = require("uuid").v4
const todosRouter = express.Router()

const albumTodos = [
    {name: "'I Need a Break'", description: "summer track release", completed: "false", _id: uuid()},
    {name: "'Wrong'", description: "winter track release", completed: "false", _id: uuid()},
    {name: "'Hershel'", description: "fall track release", completed: "false", _id: uuid()},
    {name: "'Move Out", description: "intro track for EP", completed: "false", _id: uuid()},
    {name: "'Greece Remix", description: "drake remix for promo", completed: "false", _id: uuid()}
]

todosRouter.get("/album-todos", (req, res) => {
    console.log("GET REQUEST RECIEVED")
    res.send(albumTodos)
})

    .post("/", (req, res) => {
        const newTrack = req.body
        newTrack._id = uuid()
        albumTodos.push(newTrack)
        res.send(`Added your new track ${newTrack} to the database!`)
    })


module.exports = todosRouter
