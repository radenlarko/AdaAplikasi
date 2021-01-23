const express = require('express');

const router = express.Router();

const blogCreateController = require('../controllers/blog-create');

router.post('/post', blogCreateController.blogCreate);

module.exports = router;