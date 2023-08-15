const productUsecases = require('../usecases/productUsecases');

exports.getProductByIDThumbnail = async (req, res) => {
    try {
      const { id_thumbnail } = req.params;
      const product = await productUsecases.getProductByIDUsecase(id_thumbnail);
      res.status(200).json(product);
    } catch (err) {
      const { id_thumbnail } = req.params;
      console.error(err);
      res.status(500).json({ error: err, message: `Product With id ${id_thumbnail} not found` });
    }
  };

exports.getAllProducts = async (req, res) => {
    try {
      const produts = await productUsecases.getAllProductsUsecase();
      res.status(200).json(produts);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  };

  