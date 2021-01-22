import React from 'react'
import { Button, Gap, Input, Link, TextArea, Upload } from '../../components'
import './createBlog.scss'
import {useHistory} from 'react-router-dom';

const CreateBlog = () => {
    const history = useHistory();
    return (
        <div>
            <div className="blog-post">
                <Link title="kembali" onClick={() => history.push('/')} />
                <p className="title">Create new blog post</p>
                <Input label="Post Title" placeHolder="Post Title" />
                <Upload />
                <TextArea />
                <Gap height={20} />
                <div className="button-action">
                    <Button title="Post" />
                </div>
            </div>
            <Gap height={40} />
        </div>
    )
}

export default CreateBlog
