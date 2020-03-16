const express = require('express');
const router = express.Router();
const imageController = require('../controllers/image');

router.get('/', imageController.getImages);
router.post('/addimage', imageController.addImage);
router.post('/addcomment', imageController.addComment);
router.get('/image/:id', imageController.getImageWithComments);

module.exports = router;