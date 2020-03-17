const Image = require('../models/image');
const Comment = require('../models/comment');
exports.getImages= (req, res, next)=>{
  // Image.findAll({ limit: 10, order: [['updatedAt', 'DESC']]}).then(images =>
  //   res.json(images))
  Image.findAll({ limit: 10, order: [['title', 'ASC']]}).then(images =>
    res.json(images))
};

exports.addImage = (req, res, next)=>{
  // const userId = req.body.userId;
  // const title = req.body.title;
  // const image = req.body.image;
  // console.log(userId);
  // console.log(title);
  console.log(req.body.image);
  res.send("receive image");
  next();
//   Image.build({  
//     userId: req.body.userId,
//     title: req.body.title,
//     url: req.body.url
//  }).save()
//  .then(result => {
//    console.log("succesully create image");
//    res.status(200).send("success post signup page");
//   })
//   .catch(err => {
//       console.log(err);
//       return next();
//   })  
}

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