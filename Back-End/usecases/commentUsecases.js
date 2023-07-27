const Comment = require('../models/comment');
const Thumbnail = require('../models/thumbnail');

exports.getCommentByIDUsecase = async (id_thumbnail) => {
  try {
    const comments = await Comment.find({id_thumbnail:id_thumbnail}).exec();
    if (!comments) {
      throw new Error('Comment not found from Thumbnails ID');
    }
    return comments;
  } catch (err) {
    throw new Error('Failed to get comments from Thumbnails ID');
  }
};

exports.createCommentByIDThumbnailUsecases = async (username, comment, timestamp, id_thumbnail) => {
    try {
      const idthumbnail = await Thumbnail.findById(id_thumbnail);
      if (!idthumbnail) {
        throw new Error('Thumbnail not found');
      }
  
      const comments = new Comment({
        username,
        comment,
        timestamp,
        id_thumbnail,
      });
  
      await comments.save();
  
      return comments;
    } catch (err) {
      throw new Error('Failed to create product');
    }
  };