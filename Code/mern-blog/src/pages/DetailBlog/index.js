import React from 'react'
import {RegisterBg} from '../../assets'
import './detailBlog.scss'

const DetailBlog = () => {
    return (
        <div className="detail-blog-wrapper">
            <img className="img-cover" src={RegisterBg} alt="thumb" />
            <p className="blog-title">Title Blog</p>
            <p className="blog-author">Author - Date Post</p>
            <p className="blog-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem rem suscipit totam aut quibusdam, nihil veritatis odio a perferendis corrupti quas? Laudantium ratione ea quod, consequatur laborum inventore magni deserunt?</p>
        </div>
    )
}

export default DetailBlog
