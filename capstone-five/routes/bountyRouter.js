// const express = require("express")
// const bountyRouter = express.Router()
// const Bounty = require('../models/bounty.js')

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

// module.exports = bountyRouter