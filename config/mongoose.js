
/*
    Mongoose connect example
    FROM: https://mongoosejs.com/

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));

*/
const mongoose = require('mongoose');
require("dotenv").config();

const connectMongoDB = () => {
    mongoose.connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_NAME}.awwmmyt.mongodb.net/?retryWrites=true&w=majority`).then(() => {
            console.log("DB CONNECTION : SUCCESS")
        }, (err) => { console.log("DB CONNECTION : ERROR\nERROR : " + err) })

}

module.exports = {
    connectMongoDB
}