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
    // isLiked: {
    //     type: Boolean,
    //     default: false
    // },
    // isDisliked: {
    //     type: Boolean,
    //     default: false
    // },
    // totalVotes: {
    //     type: Number,
    //     default: {
    //         likes: 0,
    //         dislikes: 0
    //     }
    // },
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    }

})


module.exports = mongoose.model("Issue", issueSchema)