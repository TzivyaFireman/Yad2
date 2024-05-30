require('dotenv').config();
const TOKEN_SECRET = process.env.TOKEN_SECRET || 3000;
const usersService = require('../services/usersService');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { UserModel } = require('../services/dbConnection');
const  User  = require('../models/user');

const register = async (req, res, next) => {
    const salt = await bcrypt.genSalt(10);
    const hasPassword = await bcrypt.hash(req.body.password, salt);
    let newUser = new User(req.body.id, req.body.name, hasPassword);
    try {
        usersService.signUp(newUser)
        res.send("registration passed successfuly");
    }
    catch (err) {
        next(err)
    }

}

const login = async (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    const currentUser = await UserModel.findOne({ name: name }).select({ _id: 0 }).exec();
    if (!currentUser)
        return res.status(400).send("user name is wrong");
    const validPass = (password === currentUser.password);
    if (!validPass)
        return res.status(400).send("Password is wrong");
    const token = jwt.sign({ name: currentUser.name }, TOKEN_SECRET);
    res.header("auth-token", token).send({ "token": token });
}

module.exports = {
    register,
    login
};
