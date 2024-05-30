const { ProductModel } = require('./dbConnection');


const getCategories = async () => {
    try {
        const categories = await ProductModel.find({})
            .select({
                _id: 0,
                categoryID: 1,
                categoryName: 1,
                "products.id": 1,
                "products.productName": 1,
                "products.price": 1,
                "products.area": 1,
                "products.phoneNumber": 1
            });

        return categories;
    } catch (error) {
        console.error("Error fetching categories:", error);
        return [];
    }
}

module.exports = {
    getCategories,
}