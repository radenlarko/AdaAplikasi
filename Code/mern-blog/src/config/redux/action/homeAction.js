import axios from "axios";

export const setDataBlog = () => (dispatch) => {
    axios.get('http://localhost:4000/v1/blog/posts?page=2&perPage=3')
    .then(result => {
        // console.log('data API', result.data);
        const responseAPI = result.data;
        dispatch({type: 'UPDATE_DATA_BLOG', payload: responseAPI.data});
    })
    .catch(err => {
        console.log('error: ', err);
    })
}