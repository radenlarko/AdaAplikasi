const {validationResult} = require('express-validator');

exports.blogCreate = (req, res, next) => {
    const title = req.body.title;
    // const image = req.body.image;
    const body = req.body.body;

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const err = new Error('Input Value tidak sesuai');
        err.errorStatus = 400;
        err.data = errors.array();
        throw err;
    }

    const result = {
        message: 'Create Blog Post Success!',
        data: {
            post_id: 1,
            title: title,
            // image: image,
            body: body,
            created_at: '23/01/2021',
            author: {
                uid: 1,
                name: 'Testing'
            }
        }
    }
    res.status(201).json(result);
}