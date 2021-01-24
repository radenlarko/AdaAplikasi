const express = require('express');
const {body} = require('express-validator');

const router = express.Router();

const blogController = require('../controllers/blog');

router.post('/post', [
    body('title').isLength({min: 5}).withMessage('Input Title tidak sesuai'), 
    body('body').isLength({min: 5}).withMessage('Isi Artikel tidak sesuai')], 
    blogController.blogCreate);

router.get('/posts', blogController.blogGetAll);
router.get('/post/:postId', blogController.blogGetById);

module.exports = router;