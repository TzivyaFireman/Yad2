const express = require('express');
const router = express.Router();
const categoryController  = require('../controllers/categoryController');
const tokenMiddleware = require('../middlewares/tokenMiddleware')

router.use(tokenMiddleware);
router.post('/', categoryController.addCategory);
router.use(tokenMiddleware);
router.get('/getAll', categoryController.getAllCategories);
router.use(tokenMiddleware);
router.get('/:id', categoryController.getCategory);
router.use(tokenMiddleware);
router.put('/update/:id',categoryController.putCategory);
router.use(tokenMiddleware);
router.delete('/delete/:id',categoryController.deleteCategory);

module.exports=router;
