const express = require('express');
const router = express.Router();
const imageController = require('../controllers/image');

router.get('/images/:tag', imageController.getImages);
router.post('/addimage', imageController.addImage);
router.post('/addcomment', imageController.addComment);
router.get('/image/:id', imageController.getImageWithComments);
router.post('/search', imageController.search);
module.exports = router;