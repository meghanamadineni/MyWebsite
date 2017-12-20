// We will declare all our dependencies here
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');
const contact = require('./controller/contact');

mongoose.Promise = global.Promise;
//Connect mongoose to our database

mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true });

//Declaring Port
const port =  3000;

//Initialize our app variable
const app = express();

//Middleware for CORS
app.use(cors());

//Middlewares for bodyparsing using both json and urlencoding
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'public')));


app.use('/contact',contact);


//Listen to port 3000
app.listen(port, () => {
	console.log(`Starting the server at port ${port}`);
});
