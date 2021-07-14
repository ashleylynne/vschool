const express = require("express")
const kickRouter = express.Router()
const uuid = require("uuid").v4

// data
let kicks = [
    {model: "air force one", brand: "nike", _id: uuid()},
    {model: "jordan 1", brand: "nike", _id: uuid()},
    {model: "the answer iv", brand: "rebok", _id: uuid()},
    {model: "yeezy boost 350 v2", brand: "addidas", _id: uuid()},
    {model: "990", brand: "new balance", _id: uuid()}
]

// GET all
kickRouter.get("/", (req, res) => {
    res.send(kicks)
})

    .post("/", (req, res) => {
        // new kick object
        const newKick = req.body
        // declare id
        newKick._id = uuid()
        // push to array of kicks
        kicks.push(newKick)
        // send to the database
        res.send(`${newKick}`)
    })

    // get one
    kickRouter.get("/:kickId", (req, res) => {
        // id
        const kickId = req.params.kickId
        // find kick by id
        const foundKick = kicks.find((kick) => kick._id === kickId)
        // send to database
        res.send(foundKick)
    })
    
        


module.exports = kickRouter

