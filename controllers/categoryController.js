const { hash } = require('bcrypt');
const Category = require('../models/category');
const categoriesService = require('../services/categoriesService');
const { ProductModel } = require('../services/dbConnection');

const addCategory = async (req, res, next) => {
    try {
        const { categoryName, categoryID, products } = req.body;
        const categ = new Category(categoryName, categoryID, products);
        const allCategories = await categoriesService.getCategories();
        allCategories.push(categ);
        categ.save(allCategories);
        res.send("Post API");
    }
    catch (err) {
        next(err);
    }
}


const getAllCategories = async (req, res) => {
    const categories = await categoriesService.getCategories();
    res.send(categories);
}


const getCategory = async (req, res) => {
    const reqId = Number(req.params.id);
    const categories = await categoriesService.getCategories();
    const category = categories.find(c => c.categoryID === reqId);
    res.send(category);
}


const putCategory = async (req, res, next) => {
    try {
        const reqId = req.params.id;
        const upCategory = req.body;
        let category = categories.find((c) => c.categoryID === reqId) || 5
        if (!category) {
            return res.status(404).send("הקטגוריה לא נמצא");
        }
        for (const key in upCategory) {
            categories[reqId - 1][key] = upCategory[key];
        }
        await fsPromises.writeFile('../categories/allProducts.json', JSON.stringify(categories));
        res.send("העדכון בוצע בהצלחה");
    } catch (err) {
        next(err);
    }
}


const deleteCategory = async (req, res, next) => {
    try {
        const reqId = Number(req.params.id);
        const category = categories.find(c => c.categoryID === reqId);
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }
        index = categories.indexOf(category);
        categories.splice([reqId - 1], 1);
        await fsPromises.writeFile('../categories/allProducts.json', JSON.stringify(categories));
        res.send("המחיקה התבצעה בהצחלה!");
    } catch (err) {
        next(err);
    }
}



module.exports = {
    getAllCategories,
    getCategory,
    addCategory,
    deleteCategory,
    putCategory
};
