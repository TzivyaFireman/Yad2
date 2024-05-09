require('dotenv').config();
const DATABASE_URL = process.env.DATABASE_URL;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(DATABASE_URL);
}


const userSchema = new Schema({
  id: Number,
  name: String,
  password: String,
});

const UserModel = mongoose.model("users", userSchema);



main().catch(err => console.log(err));

const categorySchema = new Schema({
  categoryID: Number,
  categoryName: String,
  products: [{
    id: Number,
    productName: String,
    price: Number,
    area: String,
    phoneNumber:String
  }]
});
const ProductModel = mongoose.model("products", categorySchema);


module.exports = {UserModel,ProductModel}
