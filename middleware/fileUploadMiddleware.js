const multer = require('multer');

// const upload = multer({dest : 'public/upload/'})

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/upload')
    },  
    filename:(req, file,cd)=>{
        //console.log("thiss",file);
        const ext = file.mimetype.split("/")[1];
        cb(null,`${file.fieldname}-${date.now()}.${ext}`)
    },
});
const upload = multer({
    storage: multerStorage 
})
module.exports = {
    upload
} ;