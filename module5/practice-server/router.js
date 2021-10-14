const express = require("express")
const Model = require("./model.js")
const router = express.Router()

// router.get("/", (req, res) => {
//     return res.status(200).send("hi")
// })

router.get("/", (req, res, next) => {
    Model.find((err, items) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(items)
    })
})

module.exports = router