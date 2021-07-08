const express = require("express")
const uuid = require("uuid").v4
const bountyRouter = express.Router()


// Data

let bounties = [
    {firstName: "cad", lastName: "bane", isAlive: true, bountyAmount: 50000, type: "sith", _id: uuid()},
    {firstName: "boba", lastName: "fett", isAlive: true, bountyAmount: 10000, type: "sith", _id: uuid()},
    {firstName: "zam", lastName: "wessell", isAlive: false, bountyAmount: 100000, type: "sith", _id: uuid()},
    {firstName: "aurra", lastName: "sing", isAlive: false, bountyAmount: 150000, type: "sith", _id: uuid()},
    {firstName: "embo", lastName: "n/a", isAlive: true, bountyAmount: 1519800, type: "sith", _id: uuid()}
]

// Routes

// get all

bountyRouter.get("/", (req, res) => {
		res.send(bounties)
	})

// post
    .post("/", (req, res) => {
        const newBounty = req.body
        newBounty._id = uuid()
        bounties.push(newBounty)
        res.send(`Successfully added ${newBounty.firstName} to the database!`)
    })


// Part 2 - Adding PUT & DELETE
// get one
bountyRouter.get("/:bountyId", (req, res) => {
        const bountyId = req.params.bountyId
        const foundBounty = bounties.find((bounty) => bounty._id === bountyId)
        if (!foundBounty) {
            const error = new Error("The item was not found")
            next(error)
        }
        res.send(foundBounty)
    })

    // put
    .put("/:bountyId", (req, res) => {
        const bountyId = req.params.bountyId
        const bountyIndex = bounties.findIndex((bounty) => bounty._id === bountyId)
        const updateBounty = Object.assign(bounties[bountyIndex], req.body)
        res.send(updateBounty)
    })

    // delete
    .delete("/:bountyId", (req, res)=> {
        const bountyId = req.params.bountyId
        const bountyIndex = bounties.findIndex((bounty) => bounty._id === bountyId)
        let deletedBounty = bounties.splice(bountyIndex, 1)
        res.send(`Deleted ${deletedBounty} from database!`)
    })


module.exports = bountyRouter