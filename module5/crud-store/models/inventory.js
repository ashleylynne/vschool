const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Item = new Schema({
    item: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("InventoryModel", Item)

