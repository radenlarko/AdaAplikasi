import React, { useState } from 'react'
import { Button, Gap, Input, Link, TextArea, Upload } from '../../components'
import './createBlog.scss'
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [image, setImage] = useState('');
    const [imagePreview, setImagePreview] = useState(null);
    const history = useHistory();

    const onSubmit = () => {
        console.log('title: ', title);
        console.log('body :', body);
        console.log('image :', image);

        const data = new FormData();
        data.append('title', title);
        data.append('body', body);
        data.append('image', image);

        axios.post('http://localhost:4000/v1/blog/post', data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        .then(res => {
            console.log('Post Success :', res);
        })
        .catch(err => {
            console.log('Error :', err);
        })
    }

    const onImageUpload = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setImagePreview(URL.createObjectURL(file));
    }
    return (
        <div>
            <div className="blog-post">
                <Link title="kembali" onClick={() => history.push('/')} />
                <p className="title">Create new blog post</p>
                <Input label="Post Title" placeholder="Post Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <Upload onChange={(e) => onImageUpload(e)} img={imagePreview} />
                <TextArea value={body} onChange={(e) => setBody(e.target.value)} />
                <Gap height={20} />
                <div className="button-action">
                    <Button title="Post" onClick={onSubmit} />
                </div>
            </div>
            <Gap height={40} />
        </div>
    )
}

export default CreateBlog
