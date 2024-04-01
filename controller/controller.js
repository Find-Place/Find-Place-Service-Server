const path = require('path');
const FormData = require('form-data');
const axios = require('axios');
const fs = require('fs');

async function processImage(req, res, next) {
  if (!req.file) {
    return res.status(400).json({ error: "The file doesn't uploaded" });
  }
  // console.log(req.file)
  const filePath = path.join(__dirname, '..', req.file.path);

  // await uploadad_photo.save();


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
      const locationInfo = response.data.data
      const latency = response.data.latency

      console.log(locationInfo);
      
      res.status(200).json({
        latency: latency,
        locaiton: locationInfo
      });
    })
    .catch(error => {
      console.log(error.response.data.error)
        res.status(error.response.data.status).json({
          value: error.response.data.error
        });
    });


}


module.exports = {
  processImage: processImage
}


