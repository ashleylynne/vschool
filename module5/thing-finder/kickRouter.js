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
    // POST one
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

    // GET one
    kickRouter.get("/:kickId", (req, res) => {
        // id
        const kickId = req.params.kickId
        // find kick by id
        const foundKick = kicks.find((kick) => kick._id === kickId)
        // send to database
        res.send(foundKick)
    })
    
    // DELETE one

    kickRouter.delete("/:kickId", (req, res) => {
        // get id
        const kickId = req.params.kickId
        //  get index of item
        const kickIndex = kicks.findIndex((kick) => kick._id === kickId)
        // splice it out by the index
        kicks.splice(kickIndex, 1)
        res.send(`Successfully deleted your kick!`)
    })
        
    // PUT one

    kickRouter.put("/:kickId", (req, res) => {
        const kickId = req.params.kickId
        const kickIndex = kicks.findIndex((kick) => kick._id === kickId)
        const updateObject = req.body
        const updatedKick = Object.assign(kicks[kickIndex], updateObject)
        res.send(updatedKick)
    })


module.exports = kickRouter

