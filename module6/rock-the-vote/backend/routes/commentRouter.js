const express = require("express")
const commentRouter = express.Router()
const Comment = require("../models/Comment.js")
// const jwt = require("jsonwebtoken")

// get all comments based on issue
commentRouter.get("/:issueId", (req, res, next) => {
    Comment.find({_id: req.params.issueId}, //I'm thinking we do comments by each issue bc comments by user doesn't make much sense
        (err, comments) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    })
})
// post one comment
commentRouter.post("/:issueId", (req, res, next) => {
        req.body.user = req.user._id
        req.body.issueId = req.params.issueId
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
commentRouter.delete("/:issueId/:commentId", (req, res, next) => {
    Comment.findOneAndDelete({
        _id: req.params.commentId,
        user: req.user._id
    },
        (err, deletedComment) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(`Successfully deleted ${deletedComment}`)
        })
})

// update aka the devil
commentRouter.put("/:issueId/:commentId", (req, res, next) => {
    Comment.findOneAndUpdate({
        _id: req.params.commentId, 
        user: req.user._id
    },
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