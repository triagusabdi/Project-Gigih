const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    url_product: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    id_thumbnail: { type: String, ref: 'Thumbnail' },
});

module.exports = mongoose.model('Product', productSchema);