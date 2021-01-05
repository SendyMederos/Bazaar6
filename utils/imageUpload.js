const express = require('express');
// const Image = require('../models/image');
const ejs = require('ejs');
const path = require('path');
// const Router = express.Router();
const multer = require('multer');

// Sets up path to the destination folder and defines filename
const imageStore = multer.diskStorage({
    destination: './public/uploads',
    filename: function(req, file, cb){
        cb(null, file,fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Using multer to grab imageStore details as well as define file size limitation
const upload = multer({
    storage: imageStore,
    limits: {
        fileSize: 1000000
    },
    fileFilter: function(req, file, cb) {
        fileTypes(file, cb)
    }
}).single('newImageYall')

// This function allows jpeg, tiff, and png but rejects other file types
const fileTypes = (file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/tiff' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false)
    }
}

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('./public'))

app.get('/', (req, res) => res.render('index'));

app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if(err){
      res.render('index', {
        msg: err
      });
    } else {
      if(req.file == undefined){
        res.render('index', {
          msg: 'Error: No File Selected!'
        });
      } else {
        res.render('index', {
          msg: 'File Uploaded!',
          file: `uploads/${req.file.filename}`
        });
      }
    }
  });
});

module.exports = ImageRouter;



