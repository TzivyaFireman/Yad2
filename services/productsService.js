
const  Product  = require('../models/product');
const { ProductModel } = require('./dbConnection');


const getByCategoryName = async (categoryName) => {
    const products = await ProductModel.findOne({ categoryName: categoryName }).select({ _id: 0, products: 1 }).exec();
    return products.products.map(p => new Product(p.id, p.productName, p.price,p.area,p.phoneNumber));
}


module.exports = {
    getByCategoryName,
}