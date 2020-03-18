const Image = require('../models/image');
const Comment = require('../models/comment');
const User = require('../models/user');
const multer = require('multer');
const path = require('path');
const sequelize = require('../util/database');

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
  try{
    const tag = req.params.tag;
    if (tag == 'all'){
      //Order the images by date by default
      Image.findAll({ order: [['updatedAt', 'DESC']]}).then(images =>
      res.json(images))
    } else{
      Image.findAll({ 
        where: { userId: tag},
        order: [['updatedAt', 'DESC']]}
        ).then(images =>
      res.json(images))
    }
  
  }catch(err) {
    console.log(err);
    return next();
  }
  
};

exports.addImage = (req, res, next)=>{
    upload(req, res,(err) => {
      if (err){
        res.send({
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

exports.editImage = (req, res, next)=>{
    const title = req.body.title;
    const id = req.body.id;
    console.log(title)
    console.log(id)
    Image.update(
      { title: title },
      { where: { id: id } }
    )
    .then(result =>{
      res.send("Successfully edited");
    })
    .then(err =>{
      res.send(err);
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
    res.status(500).send("An error occured when adding a comment");
      return next();
  })  
}

exports.getImageWithComments =  async (req, res, next)=>{
  try{
    const id = req.params.id;
    const image = await Image.findOne( {
      attributes: ['title', 'url', 'updatedAt'],
      where: { id: id },
      include: [{
        model: User, 
        attributes: ['username']
      }]
    });
    const comments = await Comment.findAll({
      attributes: ['text', 'updatedAt'],
      where: {imageId: id}, 
      order: [['updatedAt', 'DESC']],
      include: [{
        model: User, 
        attributes: ['username']
      }]
    });
    res.json({
      image,
      comments
    })
    console.log("successfully get image with comments");  
  } catch(err) {
      console.log(err);
      return next();
  }
}
exports.search = async (req, res, next)=>{
  try{
    const keyword = req.body.keyword;
    console.log(keyword);
    
    const images = await sequelize.query(
      "SELECT DISTINCT images.title, images.url, images.updatedAt FROM images join comments on images.id=comments.imageId WHERE images.title LIKE \"%" + keyword + "%\" OR comments.text LIKE \"%" + keyword + "%\" ",
      {type: sequelize.QueryTypes.SELECT}
    )
    if (images){
      res.json(images)
    }else {
      res.send({
        error: 'No such images found!'
      })
    }
  }catch(err){
      res.status(500).send({
        error: 'An error has occured searching images.'
      })
      return next();
    }
  }
  
  