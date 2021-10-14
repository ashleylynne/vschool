const express = require("express")
const monsterRouter = express.Router()
const Monster = require("../models/Monster.js")

let monsters = [
    {
        species: "vampire"
    },
    {
        species: "werewolf"
    }
]

// fake data test
// monsterRouter.get("/", (req, res)=> {
//     return res.status(200).send(monsters)
// })

// monsterRouter.get("/", (req, res) => {
//     monsters.find((monsters) => {
//         res.status(200).send(monsters)
//     })
// })

// monsterRouter.get("/", (req, res, next) => {
//     console.log(Monster)
//     Monster.find((err, monsters) => {
//         if(err){
//             res.status(500)
//             return next(err)
//         }
//         res.status(200).send(monsters)
//     })
// })

monsterRouter.get("/", (req, res, next) => {
    console.log(Monster)
    // console.log(Monster.find(monsters))
    res.status(200).send([monsters, 1234534, "hi"])
    next()
})

// console.log(monsters.find(Monster))

module.exports = monsterRouter

// bounty router test code

// const express = require("express")
// const bountyRouter = express.Router()
// const Bounty = require('../models/Monster.js')

// // let bounties = [
// //     bounty1, bounty2, bounty3
// // ]

// // bountyRouter.get("/", (req, res) => {
// //     res.send("hi")
// // })

// // w real data:
// bountyRouter.get("/", (req, res, next)=> {
//     Bounty.find((err, bounties) => {
//         if(err){
//             res.status(500)
//             return next(err)
//             // next will pass error to the server, catch in our error handler and send to the frontend
//         }
//         return res.status(200).send(bounties)
//     })
// })

// // w fake data:
// // bountyRouter.get("/", (req, res) => {
// //         return res.status(200).send(bounties)
// // 	})



// module.exports = bountyRouter

