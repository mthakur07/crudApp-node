const mongoose = require('mongoose');
const crudSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    image : {
        type:String,
        required: true
    }, 
    email:{
        type:String,
        required: true
    },
    contact:{
        type:String,
        required: true
    }
})
const crudModel = mongoose.model('crud', crudSchema);

module.exports = crudModel;