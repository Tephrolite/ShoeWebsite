import '../src/Pages/signup';
import { prependOnceListener } from 'cluster';
const mongoose = require('mongoose');
var Module = require('module');
var fs = require('fs');

const dbRoute = 'mongodb://localhost:27017/spoons';
mongoose.connect(dbRoute, { useNewUrlParser: true });
let db = mongoose.connection;
db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// will drop the database on startup.
db.dropDatabase().then(()=>{
    console.log("Dropped the database.");
});


const userProfileSchema = new mongoose.Schema(
    {
        id: Number,
        firstName: String,
        lastName: String,
        emailAddress: String,
        username: String,
        password: String
    }
)
let userCollection = mongoose.model("userprofiles", userProfileSchema)

const popularBrandSchema = new mongoose.Schema(
    {
        id: Number,
        title: String,
        imgSrc: String
    }
)
let popularBrandsCollection = mongoose.model("popularbrands", popularBrandSchema)

const ShoeSchema = new mongoose.Schema(
    {
        id: Number,
        title: String,
        price: Number,
        imgSrc: String
    }
)
let bestSellerCollection = mongoose.model("bestsellers", ShoeSchema)


Module._extensions['.jpg'] = function (module, fn) {
    var base64 = fs.readFileSync(fn).toString('base64');
    module._compile('module.exports="data:image/jpg;base64,' + base64 + '"', fn);
};

var Shoe = require('./Jordan 1 Black Toe Satin.jpg');

userCollection.create([
    { firstName: "Deven", lastName: "Phillips", emailAddress: "deven.phillips@us.af.mil", username: "username", password: "password"}
])

popularBrandsCollection.create([
    { title: "Razor", imgSrc: "pickcha"},
    { title: "Roccat", imgSrc: "pickcha"},
    { title: "Corsair", imgSrc: "pickcha"},
    { title: "Logitech", imgSrc: "pickcha"},
    { title: "Cherry", imgSrc: "pickcha"},
])



bestSellerCollection.insertMany([
    { title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: 166, imgSrc: Shoe },
    { title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: 166, imgSrc: Shoe }
]).then(() => {
    console.log("Test data has been loaded")
    console.log("Goodbye")
    process.exit()

})


