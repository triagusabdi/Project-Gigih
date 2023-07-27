const express = require("express");

const ThumbnailsControllers = require("../controllers/thumbnailController.js");
const ProductControllers = require("../controllers/productController.js");
const CommentControllers = require("../controllers/commentController.js");

const router = express.Router()

// Tumbnail
router.get('/thumbnails', ThumbnailsControllers.getAllThumbnails);

// Product
router.get('/product', ProductControllers.getAllProducts);
router.get('/product/:id_thumbnail', ProductControllers.getProductByIDThumbnail);

// Comment
router.get('/comment/:id_thumbnail', CommentControllers.getCommentByIDThumbnail);
router.post('/comment', CommentControllers.createCommentByIDThumbnail);

module.exports = router;

// router.post('/playlist_post', (req, res) => {
//     const playlist = new Playlist({
//         song: "song name",
//         times_played: 5
//     })

//     try {
//         const playlisttoSave = playlist.save()
//         res.status(201).json({
//             message: "Data terkirim"
//         })
//     } catch (err) {
//         res.status(400).json({
//             message: err.message
//         })
//     }
// })




