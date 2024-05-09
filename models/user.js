const { UserModel } = require('../services/dbConnection')
class User {

    constructor(id, name, password) {
        this.id = id;
        this.name = name;
        this.password = password;
    }


    async signUp() {
        const existUser = await UserModel.find({ id: this.id, name: this.name, password: this.password }).select({ _id: 0 }).exec();
        if (existUser)
            return false;
        const user = new userModel({
            id: parseInt(this.id),
            name: this.name,
            password: this.password
        })
        await user.save();
        return true;
    }

    // async signup() {
    //     const similarUser = await userModel.findOne({ name: this.name, password: this.password }).select({ _id: 0 }).exec();
    //     if (similarUser != null)
    //         return false
    //     const user = new userModel({
    //         id: parseInt(this.id),
    //         name: this.name,
    //         password: this.password,
    //     })
    //     await user.save()
    //     return true
    // }

    // static async findUserType(id, name) { לא הבנתי
    //     const user = await userModel.findOne({ id: id, name: name }).select({ _id: 0 }).exec();
    //     return user.type;
    // }
}
module.exports = { User };