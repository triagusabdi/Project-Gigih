const commentUsecases = require('../usecases/commentUsecases');

exports.getCommentByIDThumbnail = async (req, res) => {
    try {
        const { id_thumbnail } = req.params;
        const comments = await commentUsecases.getCommentByIDUsecase(id_thumbnail);
        res.status(200).json(comments);
    } catch (err) {
        const { id_thumbnail } = req.params;
        console.error(err);
        res.status(404).json({ error: err, message: `Comments With id ${id_thumbnail} not found` });
    }
};

exports.createCommentByIDThumbnail = async (req, res) => {
    try {
        const { username, comment, timestamp, id_thumbnail } = req.body;
        const comments = await commentUsecases.createCommentByIDThumbnailUsecases(
            username,
            comment,
            timestamp,
            id_thumbnail
        );
        res.status(201).json({ message: "Success"});
    } catch (err) {
        console.error(err);
        res.status(404).json({ error: 'Fail' });
    }
};









  // router.post('/song', (req, res) => {
//     const song = new Song({
//         title: "bebas",
//         director: "bebas"
//     })

//     try {
//         const SongtoSave = song.save()
//         res.status(201).json({
//             message: "Data terkirim"
//         })
//     } catch (err) {
//         res.status(400).json({
//             message: err.message
//         })
//     }
// })
