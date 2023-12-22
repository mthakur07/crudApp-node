// import express 
const express = require('express');
const mongoose = require('mongoose');
// import routes
const frontRoutes = require('./routes/front.routes')
const bodyParser = require('body-parser');
// express instance 
const app = express();

//middlware
app.use(bodyParser.urlencoded({extended: true}))

const PORT = process.env.PORT || 3000 ; 

// view engine 
app.set('view engine','hbs');

// routes
app.use(frontRoutes);
 
// app.use('/',function(){
//     console.log("welcome to nodeJS")
// });

// database connect 
mongoose
.connect("mongodb://127.0.0.1:27017/cruddb")
.then(function(){
console.log("Database connect");
})
.catch(function(err){
    console.log(err.message);
})

app.listen(PORT,function() {
    console.log("server is listening on port 3000");
})