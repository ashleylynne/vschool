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
// GET all
todosRouter.get("/", (req, res) => {
    console.log("GET REQUEST RECIEVED")
    res.send(albumTodos)
})
    // post one
    .post("/", (req, res) => {
        const newTrack = req.body
        newTrack._id = uuid()
        albumTodos.push(newTrack)
        res.send(newTrack)
    })
    // GET one
    todosRouter.get("/:trackId", (req, res) => {
        const trackId = req.params.trackId
        const foundTrack = albumTodos.find((track) => track._id === trackId)
        res.send(foundTrack)
    })

    // PUT
    .put("/:trackId", (req, res) => {
        const trackId = req.params.trackId
        const trackIndex = albumTodos.findIndex((track) => track._id === trackId)
        const updatedTrack = Object.assign(albumTodos[trackIndex], req.body)
        res.send(updatedTrack)
    })

    // DELETE
    .delete("/:trackId", (req, res) => {
        const trackId = req.params.trackId
        const trackIndex = albumTodos.findIndex((track) => track._id === trackId)
        let deletedTrack = albumTodos.splice(trackIndex, 1)
        res.send(`Deleted ${deletedTrack} from database!`)
    })

module.exports = todosRouter
