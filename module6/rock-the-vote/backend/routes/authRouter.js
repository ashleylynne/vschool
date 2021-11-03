const express = require("express")
const authRouter = express.Router()
const User = require("../models/User.js")
const jwt = require("jsonwebtoken")


authRouter.post("/signup", (req, res, next) => {
    User.findOne({username : req.body.username.toLowerCase() }, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if(user){
            res.status(403)
            return next(new Error("That username is already taken"))
        }
        const newUser = new User(req.body)
        newUser.save((err, savedUser) => {
            if(err){
                res.status(500)
                return next(err)
            }
            const token = jwt.sign(savedUser.toObject(), process.env.SECRET)
            return res.status(200).send({token, user: savedUser})
        })
    })
})

authRouter.post("/login", (req, res, next) => {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if(!user){
            res.status(403)
            return (new Error("Username or password is incorrect"))
        }
        if(req.body.password !== user.password){
            res.status(403)
            return (new Error("Username or password is incorrect"))
        }
        const token = jwt.sign(user.toObject(), process.env.SECRET)
        return res.status(200).send({user, token})
    })
})


module.exports = authRouter