const Product = require('../models/product');

exports.getProductByIDUsecase = async (id_thumbnail) => {
  try {
    const product = await Product.find({id_thumbnail:id_thumbnail}).exec();
    if (!product) {
      throw new Error('Product not found from Thumbnails ID');
    }
    return product;
  } catch (err) {
    throw new Error('Failed to get Product from Thumbnails ID');
  }
};

exports.getAllProductsUsecase = async () => {
  try {
    const product = await Product.find();
    if (!product) {
      throw new Error('Thumbnail not found');
    }
    return product;
  } catch (err) {
    throw new Error('Failed to get thumbnail');
  }
};