const { UserModel } = require('../services/dbConnection')
class User {

    constructor(id, name, password) {
        this.id = id;
        this.name = name;
        this.password = password;
    }



    async save() {
        const users = UserModel;
        console.log(users);
        // products.products.push(this);
        // await ProductModel.updateOne({ categoryName: categoryName }, { products: products.products });
    }

    // async signUp() {
    //     const existUser = await UserModel.find({name: this.name, password: this.password }).select({ _id: 0 }).exec();
    //     if (existUser)
    //         return res.status(404).send("user already exist");
    //     // const user = new userModel({
    //     //     id: Number(this.id),
    //     //     name: this.name,
    //     //     password: this.password
    //     // })
    //     await save();
    // }

}
module.exports =  User ;