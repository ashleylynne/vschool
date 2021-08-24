const express = require("express")
const router = express.Router()
const Item = require("../models/inventory")

// get inventory
router.get("/", (req, res, next) => {
    Item.find((err, inventory) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(inventory)
    })
})

// get one
    .get("/:itemId", (req, res, next) => {
        Item.findOne({_id: req.params.itemId},
            (err, item) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(item)
            })
    })

// post
    .post("/", (req, res, next) => {
        const newItem = new Item(req.body)
        newItem.save((err, savedItem) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedItem)
        })
    })

// update
    .put("/:itemId", (req, res, next) => {
        Item.findOneAndUpdate(
            {_id: req.params.itemId},
            req.body,
            {new: true},
            (err, updatedItem) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updatedItem)
            }
        )
    })

// delete
    .delete("/:itemId", (req, res, next) => {
        Item.findOneAndDelete(
            {_id: req.params.itemId},
            (err, deletedItem) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(deletedItem)
            }
        )
    })

module.exports = router
