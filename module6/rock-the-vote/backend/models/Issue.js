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

    comment: {
        // type: Schema.Types.ObjectId,
        // ref: "comment"
    },
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    }
})


module.exports = mongoose.model("Issue", issueSchema)