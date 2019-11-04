const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');
const logger = require('morgan');
const Data = require('./data');
var fs = require('fs');
var Module = require('module');

const MongoClient = require('mongodb').MongoClient
const API_PORT = 3001;
const app = express();
const router = express.Router();

app.use(cors());


// this is our MongoDB database
const dbRoute = 'mongodb://localhost:27017/spoons';

// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

// MongoClient.connect(dbRoute, function (err, db) {
//   if (err) throw err;
//   
// })

db.once('open', () => console.log('connected to the database'));


// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

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



app.post('/posted', function (request, response) {
  var username;
  var User = db.model('User', userProfileSchema);

  var dbo = db.db("UserInformation");
  dbo.collection("userCollection").findOne({ username: request.body.userName }, function (err, result) {
    if (err) throw err;
    if (result !== null) {
      username = result.username;
    }
    db.close();
    if (username !== request.body.userName) {
      User.create({
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        emailAddress: request.body.emailAddress,
        username: request.body.userName,
        userPassword: request.body.userPassword,
        confirmPassword: request.body.confirmUserPassword
      })
      console.log("User Created")
    }
  })

  // response.send({ data: "neat" }


  //   //     "firstName: " + request.body.firstName +
  //   //     " lastName: " + request.body.lastName +
  //   //     " email: " + request.body.emailAddress +
  //   //     " username: " + request.body.userName +
  //   //     " password: " + request.body.userPassword);
  //   // console.log("@@@@@@@@@@@@", request)
  //       ,userCollection.create([
  //       { firstName: response.body.firstName, 
  //       lastName: response.body.lastName, 
  //       emailAddress: response.body.emailAddress, 
  //       username: response.body.userName, 
  //       password: response.body.userPassword, 
  //       confirmPassword: response.body.confirmPassword}
  //   ]
  // ).then(() => {
  //   console.log("Test data has been loaded")
  //   console.log("Goodbye")
  //   process.exit()
  // })
});



app.post('/signup', function (request, response) {
  let firstName;
  let lastName;
  let emailAddress;
  let userName;
  let userPassord

  
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

  userCollection.findOne({ "username": request.body.username })

})

// this is our delete method
// this method removes existing data in our database
router.delete('/deleteData', (req, res) => {
  const { id } = req.body;
  Data.findByIdAndRemove(id, (err) => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

// this is our create methid
// this method adds new data in our database
router.post('/putData', (req, res) => {
  let data = new Data();

  const { id, message } = req.body;

  if ((!id && id !== 0) || !message) {
    return res.json({
      success: false,
      error: 'INVALID INPUTS',
    });
  }
  data.message = message;
  data.id = id;
  data.save((err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

router.post('/test', (req, res) => {
  res.send({ body: 'Success?' })
})

// append /api for our http requests
app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`))
