const express = require("express")
const bountyRouter = express.Router()
const Bounty = require('./models/bounty.js')
// const uuid = require("uuid").v4


// fake data

// let bounties = [
//     {firstName: "cad", lastName: "bane", isAlive: true, bountyAmount: 50000, type: "sith", _id: uuid()},
//     {firstName: "boba", lastName: "fett", isAlive: true, bountyAmount: 10000, type: "sith", _id: uuid()},
//     {firstName: "zam", lastName: "wessell", isAlive: false, bountyAmount: 100000, type: "sith", _id: uuid()},
//     {firstName: "aurra", lastName: "sing", isAlive: false, bountyAmount: 150000, type: "sith", _id: uuid()},
//     {firstName: "embo", lastName: "n/a", isAlive: true, bountyAmount: 1519800, type: "sith", _id: uuid()}
// ]

// Routes

// get all

// w fake data:
// bountyRouter.get("/", (req, res) => {
//         res.status(200)
// 		res.send(bounties)
// 	})

// w real data:
bountyRouter.get("/", (req, res, next)=> {
    Bounty.find((err, bounties) => {
        if(err){
            res.status(500)
            return next(err)
            // next will pass error to the server, catch in our error handler and send to the frontend
        }
        return res.status(200).send(bounties)
    })
})


// post
    // w fake data:
    // .post("/", (req, res) => {
    //     const newBounty = req.body
    //     newBounty._id = uuid()
    //     bounties.push(newBounty)
    //     res.status(201).send(`Successfully added ${newBounty.firstName} ${newBounty.lastName} to the database!`)
    // })

    //  w real data:
    .post("/", (req, res, next) => {
        const newBounty = new Bounty(req.body)
        newBounty.save((err, savedBounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            res.status(201).send(savedBounty)
        })
    })

// Part 2 - Adding PUT & DELETE
// get one
// bountyRouter.get("/:bountyId", (req, res, next) => {
//         const bountyId = req.params.bountyId
//         const foundBounty = bounties.find((bounty) => bounty._id === bountyId)
//         if (!foundBounty) {
//             const error = new Error("The item was not found")
//             res.status(500)
//             return next(error)
//         }
//         res.status(200).send(foundBounty)
//     })

    // put
    // w fake data:
    // .put("/:bountyId", (req, res) => {
    //     const bountyId = req.params.bountyId
    //     const bountyIndex = bounties.findIndex((bounty) => bounty._id === bountyId)
    //     const updateBounty = Object.assign(bounties[bountyIndex], req.body)
    //     res.status(201).send(updateBounty)
    // })

    // w real data
    .put("/:bountyId", (req, res, next) => {
        Bounty.findOneAndUpdate(
            {_id: req.params.bountyId}, //find this one to update
            req.body, //update object w this data
            {new: true}, //send back updated version pls
            (err, updatedBounty) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updatedBounty)
        })
    })

    // delete
    // w fake data:
    // .delete("/:bountyId", (req, res)=> {
    //     const bountyId = req.params.bountyId
    //     const bountyIndex = bounties.findIndex((bounty) => bounty._id === bountyId)
    //     let deletedBounty = bounties.splice(bountyIndex, 1)
    //     res.send(`Deleted ${deletedBounty} from database!`)
    // })

    // w real data
    .delete("/:bountyId", (req, res, next)=> {
        Bounty.findOneAndDelete({_id: req.params.bountyId}, (err, deletedItem)=> {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted ${deletedItem.firstName} from the database!`)
        })
    })

    // get by type (jedi/sith)
    .get("/search/type", (req, res, next)=> {
        Bounty.find({type: req.query.type}, (err, bounties)=> {
            if(err){
                res.status(500)
                return next(err)
            }
            res.status(201).send(bounties)
        })
    })

module.exports = bountyRouter
