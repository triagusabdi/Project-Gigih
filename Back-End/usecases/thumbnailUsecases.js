const Thumbnail = require('../models/thumbnail');

exports.getAllThumbnailUsecase = async () => {
  try {
    const thumbnail = await Thumbnail.find();
    if (!thumbnail) {
      throw new Error('Thumbnail not found');
    }
    return thumbnail;
  } catch (err) {
    throw new Error('Failed to get thumbnail');
  }
};