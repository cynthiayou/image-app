const express = require('express');
const router = express.Router();
const imageController = require('../controllers/image');

router.get('/images', imageController.getImages);
router.post('/addimage', imageController.addImage);
router.post('/addcomment', imageController.addComment);
router.get('/image/:id', imageController.getImageWithComments);

module.exports = router;