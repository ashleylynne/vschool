const mongoose = require("mongoose")
const Schema = mongoose.Schema


// bounty blueprint
const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
    },
    bountyAmount: {
        type: Number,
        required: true
    },
    isAlive: {
        type: Boolean,
        required: true
    }

})

module.exports = mongoose.model("Bounty", bountySchema)