const express = require('express');
const { create, store, edit, update, trash, home } = require('../controller/front.controller');
const { upload } = require('../middleware/fileUploadMiddleware');
const router = express.Router();

// index 
router.get('/',home);

//create 
router.get('/create',create);
// store 
// jab routes UI ko represent karega to get use karege and baki jagah post use karege

router.post('/store',upload.single('image'), store);

// edit
router.get('/edit/:id',edit);

// update

router.post('/update/:id',update);

// delete

router.post('/trash/:id',trash);


module.exports = router;