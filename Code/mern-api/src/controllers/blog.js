const {validationResult} = require('express-validator');
const BlogPost = require('../models/blog');

exports.blogCreate = (req, res, next) => {
    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        const err = new Error('Input Value tidak sesuai');
        err.errorStatus = 400;
        err.data = errors.array();
        throw err;
    }

    if(!req.file) {
        const err = new Error('Image harus di Upload!');
        err.errorStatus = 422;
        throw err;
    }

    const title = req.body.title;
    const image = req.file.path;
    const body = req.body.body;
    
    const Posting = new BlogPost({
        title: title,
        body: body,
        image: image,
        author: {uid: 1, name: 'Yos Sularko'}
    })

    Posting.save()
    .then(result => {
        res.status(201).json({
            message: 'Create Blog Post Success!',
            data: result
        });
    })
    .catch(err => {
        console.log('err :', err);
    });

}

exports.blogGetAll = (req, res, next) => {
    BlogPost.find()
    .then(result => {
        res.status(200).json({
            message: 'Data Blog berhasil dipanggil',
            data: result
        })
    })
    .catch(err => {
        next(err);
    })
}

exports.blogGetById = (req, res, next) => {
    const postId = req.params.postId;
    BlogPost.findById(postId)
    .then(result => {
        if(!result){
            const error = new Error('Blog Post tidak ditemukan!');
            error.errorStatus = 404;
            throw error;
        }
        res.status(200).json({
            message: 'Data Blog berhasil dipanggil',
            data: result
        })
    })
    .catch(err => {
        next(err);
    })
}