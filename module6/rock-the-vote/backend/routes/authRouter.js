const express = require("express")
const authRouter = express.Router()
const User = require("../models/User.js")
const jwt = require("jsonwebtoken")

// signup

authRouter.post("/signup", async(req, res, next) => {
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
            const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
            return res.status(200).send({token, user: savedUser.withoutPassword()})
        })
    })
})

// login
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

        user.checkPassword(req.body.password, (err, isMatch) => {
            if(err){
                res.status(403)
                return next(new Error("Username or password is taken"))
            }
            if(!isMatch){
                res.status(403)
                return next(new Error("Username or password is incorrect"))
            }
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
            return res.status(200).send({token, user: user.withoutPassword()})
        })
    })
})


module.exports = authRouter