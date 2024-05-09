const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const tokenMiddleware = require('../middlewares/tokenMiddleware')

router.use(tokenMiddleware);
router.post('/:categoryName/post', productController.addProduct);
router.use(tokenMiddleware);
router.get('/:categoryName/getAll', productController.getAllProducts);
router.use(tokenMiddleware);
router.get('/:categoryName/:id', productController.getProduct);
router.use(tokenMiddleware);
router.put('/:categoryName/update/:id', productController.putProduct);
router.use(tokenMiddleware);
router.delete('/:categoryName/delete/:id', productController.deleteProduct);

module.exports = router;