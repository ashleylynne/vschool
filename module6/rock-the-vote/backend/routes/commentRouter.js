const express = require("express")
const commentRouter = express.Router()
const Comment = require("../models/Comment.js")
const jwt = require("jsonwebtoken")


// get all comments (not sure if I need this but will build just in case)
commentRouter.get("/", (req, res, next) => {
    Comment.find(
        {user: req.user._id},
        (err, comments) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    })
})

// post comment
commentRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const newComment = new Comment(req.body)
    newComment.save((err, savedComment) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedComment)
    })
})

//  delete comment
commentRouter.delete("/:commentId", (req, res, next) => {
    Comment.findOneAndDelete(
        {_id: req.params.commentId, user: req.user._id},
        (err, deletedComment) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(`Successfully deleted ${deletedComment}`)
        })
})

// update aka the devil
commentRouter.put("/:commentId", (req, res, next) => {
    Comment.findOneAndUpdate(
        {id: req.params.commentId, user: req.user._id},
        req.body,
        {new: true},
        (err, updatedComment) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedComment)
        }
    )
})

module.exports = commentRouter