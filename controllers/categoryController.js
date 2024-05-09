const express = require('express');
const router = express.Router();
const Category = require('../models/category');
const mongoose = require('mongoose');


const addCategory = async (req, res, next) => {
    try {
        let newCategory = new Category();
        newCategory = req.body;
        const categ = new Category(newCategory.categoryID, newCategory.categoryName, newCategory.products);
        categ.save();
        res.send("Post API");
    }
    catch (err) {
        next(err);
    }
}


const getAllCategories = (req, res) => {
    let categories = []
    categories.forEach(c => categories.push(c.categoryName));
    res.send(categories.toSorted((a, b) => a.localCompare(b)));
}


const getCategory = (req, res) => {
    const reqId = Number(req.params.id);
    category = categories.find(c => c.categoryID === reqId);
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
