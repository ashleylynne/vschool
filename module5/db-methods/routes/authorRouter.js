const express = require("express")
const Author = require("../models/author")
const authorRouter = express.Router()

// Get all authors
authorRouter.get("/", (req, res, next) => {
    Author.find((err, authors)=> {
        if(err){
            res.status(500)
            return next(err)
        }
        res.status(200).send(authors)
    })
})

// get authors by search term
authorRouter.get("/search", (req, res, next) => {
    const { author } = req.query
    const pattern = new RegExp(author)
    Author.find( {lastName: { $regex: pattern, $options: 'i' }}, (err, authors) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(authors)
    })
})

// post
    .post("/", (req, res, next) => {
        const newAuthor = new Author(req.body)
        newAuthor.save((err, savedAuthor) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedAuthor)
        })
    })

    module.exports = authorRouter