const Category = require('../models/category');
const { ProductModel } = require('./dbConnection');


const getCategories = async () => {
    try {

        const categories = await ProductModel.find({});
        return categories;
    } catch (error) {
        console.error("Error fetching categories:", error);
        return [];
    }
}

module.exports = {
    getCategories,
}