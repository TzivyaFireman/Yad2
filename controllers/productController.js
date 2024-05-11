const Product = require('../models/product');
const productService = require('../services/productsService');
const { ProductModel } = require('../services/dbConnection');



const addProduct = async (req, res, next) => {
    try {
        const reqName = req.params.categoryName;
        let newProduct = new Product(req.body.id, req.body.productName, req.body.price, req.body.area, req.body.phoneNumber);
        newProduct.save(reqName);
        res.send("נוסף בהצלחה!");
    }
    catch (err) {
        next(err);
    }
}


const getAllProducts = async (req, res) => {
    const reqName = req.params.categoryName;
    const products = await productService.getByCategoryName(reqName);
    res.send(products);
}


const getProduct = async (req, res) => {
    const reqId = Number(req.params.id);
    const reqName = req.params.categoryName;
    const products = await productService.getByCategoryName(reqName);
    const product = products.find(p => p.id === reqId);
    res.send(product);
}


const putProduct = async (req, res, next) => {
    try {
        const products = await ProductModel.findOne({ categoryName: req.params.categoryName }).select({ _id: 0, products: 1 }).exec();
        const index = products.products.findIndex(p => p.id == req.params.id)
        products.products[index] = req.body;
        await ProductModel.updateOne({ categoryName: req.params.categoryName }, products);
        res.send("updated!😅");
    }
    catch (err) {
        next(err);
    }
}


const deleteProduct = async (req, res, next) => {
    try {
        const products = await ProductModel.findOne({ categoryName: req.params.categoryName }).select({ _id: 0, products: 1 }).exec();
        const afterDelete = products.products.filter(p => p.id != req.params.id);
        await ProductModel.updateOne({ categoryName: req.params.categoryName }, { products: afterDelete });
        res.send("המחיקה התבצעה בהצחלה!");
    }
    catch (err) {
        next(err);
    }
}



module.exports = {
    addProduct,
    getAllProducts,
    getProduct,
    deleteProduct,
    putProduct
};
