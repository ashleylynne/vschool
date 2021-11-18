const mongoose = require("mongoose")
const Schema = mongoose.Schema


const issueSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    },

    comments: {
        
    }

})


module.exports = mongoose.model("Issue", issueSchema)