const mongoose = require("mongoose");

const thumbnailSchema = mongoose.Schema({
    url_image: { type: String, required: true }
});

module.exports = mongoose.model('Thumbnail', thumbnailSchema);