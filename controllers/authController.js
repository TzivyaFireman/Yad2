const fsPromises = require('fs').promises;
const express = require('express');
const router = express.Router()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { UserModel } = require('../services/dbConnection');
const mongoose = require('mongoose');
const { log } = require('console');
const { User } = require('../models/user');
const TOKEN_SECRET = '*****';


const register = async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hasPassword = await bcrypt.hash(req.body.password, salt);
    let newUser = new User(req.body.id, req.body.name, hasPassword);
    if (newUser.signUp())
        res.send("yess👍");
    else
        res.send("wooops🤬🙄🤨");


}

const login = async (req, res) => {

    const name = req.body.name;
    const password = req.body.password;
    console.log(UserModel);
    const currentUser = await UserModel.findOne({ name: name }).select({ _id: 0 }).exec();


    if (currentUser) {
        const validPass = (req.body.password === currentUser.password);
        if (!validPass)
            return res.status(400).send("name or Password is wrong");

        // Create and assign token
        const token = jwt.sign({ name: currentUser.name }, TOKEN_SECRET);
        res.header("auth-token", token).send({ "token": token });

    }

}

module.exports = {
    register,
    login
};
