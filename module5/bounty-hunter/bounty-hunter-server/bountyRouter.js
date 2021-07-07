const express = require("express")
const uuid = require("uuid").v4
const bountyRouter = express.Router()

// Data

const bounties = [
    {firstName: "cad", lastName: "bane", isAlive: true, bountyAmount: 50000, type: "sith", _id: uuid()},
    {firstName: "boba", lastName: "fett", isAlive: true, bountyAmount: 10000, type: "sith", _id: uuid()},
    {firstName: "zam", lastName: "wessell", isAlive: false, bountyAmount: 100000, type: "sith", _id: uuid()},
    {firstName: "aurra", lastName: "sing", isAlive: false, bountyAmount: 150000, type: "sith", _id: uuid()},
    {firstName: "embo", lastName: "n/a", isAlive: true, bountyAmount: 1519800, type: "sith", _id: uuid()}
]


// Routes

// get all
bountyRouter.route("/bounties")
    .get((req, res)=> {
        res.send(bounties)
    })

// post
    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuid()
        bounties.push(newBounty)
        res.send(`Successfully added ${newBounty} to the database!`)
    })


// Part 2 - Adding PUT & DELETE

bountyRouter.route("bounties/:bountyId")
    // get one
    .get((req, res) => {
        res.send(`GET req /bounties/${req.params.bountyId} endpoint`)
    })

    // put
    .put((req, res) => {
        res.send(`Put req /${req.params.bountyId} endpoint`)
    })

    // delete
    .delete((req, res)=> {
        res.send(`Delete req /${req.params.bountyId} from the databases`)
    })


module.exports = bountyRouter