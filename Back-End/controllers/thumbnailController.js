const thumbnailUsecases = require('../usecases/thumbnailUsecases');

exports.getAllThumbnails = async (req, res) => {
    try {
      const thumbnails = await thumbnailUsecases.getAllThumbnailUsecase();
      res.status(200).json(thumbnails);
    } catch (err) {
      console.error(err);
      res.status(404).json({ error: 'Thumbnails not found' });
    }
  };

  