import React from 'react'
import { Button, Gap, Input, TextArea, Upload } from '../../components'
import './createBlog.scss'

const CreateBlog = () => {
    return (
        <div>
            <div className="blog-post">
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
