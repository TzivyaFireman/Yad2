const { ProductModel } = require('../services/dbConnection');
class Product {
    constructor(id, productName, price, area, phoneNumber) {
        this.id = id;
        this.productName = productName;
        this.price = price;
        this.area = area;
        this.phoneNumber = phoneNumber;
    }

    async save(categoryName) {
        const products = await ProductModel.findOne({ categoryName: categoryName }).select({ _id: 0, products: 1 }).exec();
        products.products.push(this);
        await ProductModel.updateOne({ categoryName: categoryName }, { products: products.products });
    }
}
module.exports = Product;