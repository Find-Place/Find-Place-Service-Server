const path = require('path');
const Photo = require('../model/photo');
const request = require('request');
const FormData = require('form-data');
const axios = require('axios');

const fs = require('fs');

async function processImage(req, res, next) {
  if (!req.file) {
    return res.status(400).json({ error: "The file doesn't uploaded" });
  }
  // console.log(req.file)
  const filePath = path.join(__dirname, '..', req.file.path);
  const uploadad_photo = new Photo(filePath, req.body.region, Date.now());

  await uploadad_photo.save();


  const url = 'http://localhost:5001/sendImage';

  const formData = new FormData();
  formData.append('sendingImage', fs.createReadStream(filePath));


  axios.post(url, formData, {
    headers: {
      ...formData.getHeaders(),
    },
  })
    .then(response => {
      console.log('응답 받음:');
    })
    .catch(error => {
      console.error('에러 발생:');
    });

  res.status(200).json({
    id: uploadad_photo.id,
    filePath: uploadad_photo.url
  });
}


module.exports = {
  processImage: processImage
}