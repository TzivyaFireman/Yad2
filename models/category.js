const { ProductModel } = require('../services/dbConnection');
class Category {
    constructor(categoryName, categoryID, products) {
        this.categoryName = categoryName;
        this.categoryID = categoryID;
        this.products = products;
    }


    async save(allCategories) {
        await ProductModel.deleteMany({});
        await ProductModel.insertMany(allCategories);
    }
}

module.exports = Category;