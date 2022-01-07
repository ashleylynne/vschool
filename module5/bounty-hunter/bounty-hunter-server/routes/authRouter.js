const express = require('express')
const authRouter = express.Router()
const User = require("../models/user.js")
const jwt = require('jsonwebtoken')


// Signup
authRouter.post("/signup", async(req, res, next) => {
    // check if username exists
    User.findOne({username: req.body.username}, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if(user){
            res.status(403)
            return next(new Error("That username is already taken"))
        }
        // save username
        const newUser = new User(req.body)
        newUser.save((err, savedUser) => {
            if(err){
                res.status(500)
                return next(err)
            }
            // create token
                                // remember: takes payload and signature to create function
            const token = jwt.sign(savedUser.toObject(), process.env.SECRET)
            // send everything back to client
            return res.status(201).send({token, user: savedUser.toObject()})
        })
    })
})

module.exports = authRouter