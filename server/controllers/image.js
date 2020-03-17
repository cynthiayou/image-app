const Image = require('../models/image');
const Comment = require('../models/comment');
const multer = require('multer');
const path = require('path');
const fs = require('fs')

//Set Storage Engine
const storage = multer.diskStorage({
  destination: '../client/static/',
  filename: function(req, file, cb){
    cb(null, file.originalname);
  }
})

// Init Upload
const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);

  }
}).single('file');

// Check File Type
function checkFileType(file, cb){
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // check mime
  const minetype = filetypes.test(file.mimetype);

  if (extname && minetype){
    return cb(null, true);
  }
  else{
    cb('Error: Image Only!');
  }
}

exports.getImages= (req, res, next)=>{
  // Image.findAll({ limit: 10, order: [['updatedAt', 'DESC']]}).then(images =>
  //   res.json(images))
  Image.findAll({ limit: 10, order: [['title', 'ASC']]}).then(images =>
    res.json(images))
};

exports.addImage = (req, res, next)=>{
    upload(req, res,(err) => {
      if (err){
        res.status(500).send({
          error: 'An error has occured trying to upload image'
        })
      }else{
        const title = req.body.title;
        const userId = req.body.userId;
        const url = req.file.filename;
        Image.create({
          userId: userId,
          title: title,
          url: url
        })
        .then(result =>{          
           res.send("image successfully uploaded");
        })
        .then(err2 => {
           res.send({
            error: 'An error has occured trying to upload image'
          })
        })
      }
  })
};

exports.addComment = (req, res, next)=>{
  const userId = req.body.userId;
  const imageId = req.body.imageId;
  const text = req.body.text;
  console.log(userId);
  console.log(imageId);
  console.log(text);
  Comment.create({  
    userId: req.body.userId,
    imageId: req.body.imageId,
    text: req.body.text
 })
 .then(result => {
   console.log("succesully adding comment");
   res.status(200).send("success adding comment");
  })
  .catch(err => {
      console.log(err);
      return next();
  })  
}

exports.getImageWithComments =  async (req, res, next)=>{
  try{
    const id = req.params.id;
    console.log(id);
    const image = await Image.findOne( {
      where: { id: req.params.id }
    });
    const comments = await Comment.findAll({
      where: {imageId: id}, limit: 10, order: [['updatedAt', 'DESC']]
    });
    res.json({
      image, 
      comments
    })
    console.log("succesully get image with comments");  
  } catch(err) {
      console.log(err);
      return next();
  }
}