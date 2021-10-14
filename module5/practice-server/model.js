const mongoose = require("mongoose")
const Schema = mongoose.Schema

const modelSchema = new Schema({
    name: String,
    age: Number,
})

module.exports = mongoose.model("Model", modelSchema)