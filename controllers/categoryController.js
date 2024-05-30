const Category = require('../models/category');
const categoriesService = require('../services/categoriesService');

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
        const reqId = Number(req.params.id);
        const { categoryName, categoryID, products } = req.body;
        const updatedCategory = new Category(categoryID, categoryName, products)
        const allCategories = await categoriesService.getCategories();
        const categoryIndex = allCategories.findIndex(cat => cat.categoryID === reqId);
        if (categoryIndex === -1) {
            return res.status(404).send("Category nokkt found");
        }

        allCategories[categoryIndex].categoryName = categoryName;
        allCategories[categoryIndex].products = products;

        await updatedCategory.save(allCategories);


        res.send("העדכון בוצע בהצלחה");
    } catch (err) {
        next(err);
    }
}


const deleteCategory = async (req, res, next) => {
    try {
        const reqId = req.params.id;
        const allCategories = await categoriesService.getCategories();
        const categoryIndex = allCategories.findIndex(cat => cat.categoryID === Number(reqId));
        if (categoryIndex === -1) {
            return res.status(404).json({ error: 'Category not found' });
        }
        allCategories.splice([categoryIndex], 1);
        const categ = new Category();
        categ.save(allCategories);
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
