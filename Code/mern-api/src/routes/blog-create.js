const express = require('express');
const {body} = require('express-validator');

const router = express.Router();

const blogCreateController = require('../controllers/blog-create');

router.post('/post', [
    body('title').isLength({min: 5}).withMessage('Input Title tidak sesuai'), 
    body('body').isLength({min: 5}).withMessage('Isi Artikel tidak sesuai')], 
    blogCreateController.blogCreate);

module.exports = router;