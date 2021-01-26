import React, { useEffect, useState } from 'react'
import { BlogItem, Button, Gap } from '../../components'
import './home.scss'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
    // const [dataBlog, setDataBlog] = useState([]);
    const {dataBlogs, name} = useSelector(state => state);
    const dispatch = useDispatch();

    // console.log('State global :', stateGlobal);
    console.log('State Blog Global :', dataBlogs);
    useEffect(() => {
        setTimeout(() => {
            dispatch({type: 'UPDATE_NAME'})
        }, 3000);

        axios.get('http://localhost:4000/v1/blog/posts?page=2&perPage=3')
        .then(result => {
            console.log('data API', result.data);
            const responseAPI = result.data;

            // setDataBlog(responseAPI.data);
            dispatch({type: 'UPDATE_DATA_BLOG', payload: responseAPI.data});
        })
        .catch(err => {
            console.log('error: ', err);
        })
    }, [])
    const history = useHistory();
    return (
        <div className="home-page-wrapper">
            <div className="create-wrapper">
                <Button title="Create Blog" onClick={() => history.push('/create-blog')} />
            </div>
    <p>{name}</p>
            <Gap height={20} />
            <div className="content-wrapper">
                {dataBlogs.map(blog => {
                    return (
                        <BlogItem 
                            key={blog._id} 
                            image={`http://localhost:4000/${blog.image}`}
                            title={blog.title}
                            body={blog.body}
                            name={blog.author.name}
                            date={blog.createdAt}
                        />
                    )
                })}
            </div>
            <div className="pagination">
                <Button title="Prev" />
                <Gap width={20} />
                <Button title="Next" />
            </div>
            <Gap height={20} />
        </div>
    )
}

export default Home
