const express = require("express")
const User = require("../models/User")
const userRouter = express.Router()

// userRouter.get("/", (req, res, next) => {
//     // get request would go here once I make a model
// })

// post will post user email and messages to the db

userRouter.post("/", (req, res, next) => {
    const newUser = new User(req.body)
    newUser.save((err, savedUser) => {
        console.log("post!")
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedUser)
    })
})


module.exports = userRouter
