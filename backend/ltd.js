import '../src/Pages/SignUp/signup';
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');
const logger = require('morgan');
const Data = require('./data');
var fs = require('fs');
var Module = require('module');

const API_PORT = 3001;
const app = express();
const router = express.Router();

app.use(cors());

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

// this is our get method
// this method fetches all available data in our database
router.get('/getData', (req, res) => {
    Data.find((err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });
  });

  // this is our update method
// this method overwrites existing data in our database
router.post('/updateData', (req, res) => {
    const { id, update } = req.body;
    Data.findByIdAndUpdate(id, update, (err) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  });

app.post('/posted', function(request, response) {
    response.send("got it");
  })

const userProfileSchema = new mongoose.Schema(
    {
        id: Number,
        firstName: String,
        lastName: String,
        emailAddress: String,
        username: String,
        password: String,
        confirmPassword: String
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
    { firstName: response.body.firstName, 
    lastName: response.body.lastName, 
    emailAddress: response.body.emailAddress, 
    username: response.body.userName, 
    password: response.body.userPassword, 
    confirmPassword: response.body.confirmPassword}
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


