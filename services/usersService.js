const bcrypt = require('bcrypt');
const User = require('../models/user');

const signUp = async (user) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);

        const newUser = new User(user.id,user.name,hashedPassword);
        await newUser.save();

        return newUser;
    } catch (error) {
        throw error;
    }
}


module.exports = { signUp };