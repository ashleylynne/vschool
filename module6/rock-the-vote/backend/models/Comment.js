const mongoose = require("mongoose")
const Schema = mongoose.Schema

const commentSchema = new Schema({

    comment: {
        type: String
    },

    completed: {
        type: Boolean,
        default: false
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    issue: {
        type: Schema.Types.ObjectId,
        ref: "Issue",
        required: true
    }

})


module.exports = mongoose.model("Comment", commentSchema)