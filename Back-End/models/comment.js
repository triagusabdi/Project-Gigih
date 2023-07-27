const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    username: { type: String, required: true },
    comment: { type: String, required: true },
    timestamp: { type: Date, required: true, default: Date.now },
    id_thumbnail: { type: String, ref: 'Thumbnail' }
});

module.exports = mongoose.model('Comment', commentSchema);