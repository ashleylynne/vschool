const express = require("express")
const book = require("../models/book")
const bookRouter = express.Router()



// get all

bookRouter.get("/", (req, res, next)=> {
    book.find((err, books)=> {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(books)
    })
})

// get by author
// bookRouter.get("/:authorId", (req, res, next) => {
//     book.find({author: req.params.authorId}, (err, books) => {
//         if(err){
//             res. status(500)
//             return next(err)
//         }
//         return res.status(200).send(books)
//     })
// })


// post
bookRouter.post("/:authorID", (req, res, next) => {
    console.log(req.params)
    req.body.author = req.params.authorID
    const newBook = new book(req.body)
    newBook.save((err, savedBook) => {
        if(err){
            res.status(500)
            return next(err)
        }
        res.status(201).send(savedBook)
    })
})

// like a book
    .put("/like/:bookId", (req, res, next) => {
        book.findOneAndUpdate(
            {_id: req.params.bookId},
            {$inc: { likes: 1 } },
            {new: true},
            (err, likedBook) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(likedBook)
        })
    })

// find books by like range
bookRouter.get("/bylikes", (req, res, next) => {
    book.where("likes").gte(500).exec((err, books) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(books)
    })
})


module.exports = bookRouter
