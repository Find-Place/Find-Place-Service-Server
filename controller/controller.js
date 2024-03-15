const path = require('path');
const Photo = require('../model/photo');

async function processImage(req, res, next) {
    if (!req.file) {
        return res.status(400).json({ error: "The file doesn't uploaded" });
      }

      const filePath = path.join(__dirname, '..', req.file.path);
      const uploadad_photo = new Photo(filePath, req.body.region, Date.now());

      await uploadad_photo.save();

      res.status(200).json({
        id: uploadad_photo.id,
        imagePath : uploadad_photo.url
      });
}


module.exports = {
    processImage: processImage
}