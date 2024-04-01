const express = require("express");
const router = express.Router();
const multer = require('multer');
const controller = require('../controller/controller');

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, 'uploaded_photo.jpg');
    }
})
const upload = multer({ storage: storageConfig });


router.post('/image/upload', upload.single('image'), controller.processImage);

module.exports = router;