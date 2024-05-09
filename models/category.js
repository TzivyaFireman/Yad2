class Category {
    #categoryID;
    #categoryName;
    #products;
    constructor(categoryID,categoryName, products) {
        this.#categoryID = categoryID;
        this.#categoryName = categoryName;
        this.#products = products;
    }
    get categoryID() {
        return this.#categoryID;
    }
    set categoryID(categoryID) {
        this.#categoryID = categoryID;
    }

    get categoryName() {
        return this.#categoryName;
    }
    set categoryName(categoryName) {
        this.#categoryName = categoryName;
    }

    get products() {
        return this.#products;
    }
    set products(products) {
        this.#products = products;
    }

    async save() {
        const fs = require('fs');
        const fsPromises = fs.promises;
        const categories = require('../data/allProducts.json');
        categories.push(this);
        await fsPromises.writeFile("../data/allProducts.json", JSON.stringify(categories))
    }
}


module.exports = Category;