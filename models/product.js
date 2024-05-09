const { ProductModel } = require('../services/dbConnection');
class Product {
    // #id;
    // #productName;
    // #price;
    // #area;
    // #phoneNumber;

    constructor(id, productName, price, area, phoneNumber) {
        this.id = id;
        this.productName = productName;
        this.price = price;
        this.area = area;
        this.phoneNumber = phoneNumber;
    }

    // get id() {
    //     return this.#id;
    // }
    // set id(id) {
    //     this.#id = id;
    // }

    // get productName() {
    //     return this.#productName;
    // }
    // set productName(productName) {
    //     this.#productName = productName;
    // }

    // get price() {
    //     return this.#price;
    // }
    // set price(price) {
    //     this.#price = price;
    // }

    // get area() {
    //     return this.#area;
    // }
    // set area(area) {
    //     this.#area = area;
    // }

    // get phoneNumber() {
    //     return this.#phoneNumber;
    // }
    // set phoneNumber(phoneNumber) {
    //     this.#phoneNumber = phoneNumber;
    // }
    async save(categoryName){
        const products = await ProductModel.findOne({ categoryName : categoryName }).select({ _id: 0, products: 1 }).exec();
        products.products.push(this);
        await ProductModel.updateOne({ categoryName: categoryName }, { products: products.products });
      }
    // async save(categoryName) {
    //     const fs = require('fs');
    //     const fsPromises = fs.promises;
    //     const categories = require('../data/allProducts.json');
    //     const category = categories.find(cat=>cat.categoryName==categoryName);
    //     category.products.push(this);
    //     await fsPromises.writeFile("../data/allProducts.json", JSON.stringify(categories),'w')

    // }
}
module.exports = Product;