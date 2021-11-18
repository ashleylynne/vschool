const express = require("express")
const Issue = require("../models/Issue")
const issueRouter = express.Router()
const jwt = require("jsonwebtoken")



// get all issues by user
issueRouter.get("/", (req, res, next) => {
    Issue.find(
        {user: req.user._id},
        (err, issues) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(issues)
        }
    )
})

// get all issues
    // this currently returns an empty array. how do i give users access to all issues? how can they comment if they don't have access?
issueRouter.get("/", (req, res, next) => {
    Issue.find((err, issues) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

// post issue
issueRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const newIssue = new Issue(req.body)
    newIssue.save((err, savedIssue) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedIssue)
    })
})

// delete one issue
issueRouter.delete("/:issueId", (req, res, next) => {
    Issue.findOneAndDelete(
        {_id: req.params.issueId, user: req.user._id},
        (err, deletedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(`successfully deleted ${deletedIssue} from the database!`)
        }
    )
})

// update aka my worst nightmare
issueRouter.put("/:issueId", (req, res, next) => {
    Issue.findOneAndUpdate(
        {_id: req.params.issueId, user: req.user._id},
        req.body,
        {new: true},
        (err, updatedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedIssue)
        }
    )
})



module.exports = issueRouter