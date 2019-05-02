import axios from 'axios';

//get Posts
export const FETCHING_POSTS = 'IS_FETCHING_POSTS';
export const POSTS = 'POSTS';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';

//create Posts
export const CREATING_POST = 'CREATING_POST';
export const POST_CREATED = 'POST_CREATED';
export const CREATE_POST_ERROR = 'CREATE_POST_ERROR';

//edit Posts
export const EDITING_POST = 'EDITING_POST';
export const POST_EDITED = 'POST_EDITED';
export const EDIT_POST_ERROR = 'EDIT_POST_ERRO';

//DELETE Posts
export const DELETING_POST = 'DELETING_POST';
export const POST_DELETED = 'POST_DELETED';
export const DELETE_POST_ERROR = 'DELETE_POST_ERROR';

export const getPosts = () => (dispatch) => {
    dispatch({type: FETCHING_POSTS});
    axios
        .get('/posts', {headers: {token: localStorage.getItem('token')}})
        .then((res) => {
            dispatch({ type: POSTS, payload: res.data});
        })
        .catch((err) => {
            dispatch({type: FETCH_POSTS_ERROR, payload: err});
        });
};

export const createPost = (newPost) => (dispatch) => {
    dispatch({type: CREATING_POST});
    return axios
        .post('/newPost', newPost, {headers: {token: localStorage.getItem('token')}})
        .then((res) => {
            dispatch({ type: POST_CREATED, payload: res.data});
        })
        .catch((err) => {
            dispatch({type: CREATE_POST_ERROR, payload: err})
        });
};

export const editPost = (post) => (dispatch) => {
    dispatch({type: EDITING_POST});
    return axios
        .post('/editPost', post, {headers: {token: localStorage.getItem('token')}})
        .then((res) => {
            dispatch({ type: POST_EDITED, payload: res.data});
        })
        .catch((err) => {
            dispatch({type: EDIT_POST_ERROR, payload: err})
        });
};

export const deletePost = (postID) => (dispatch) => {
    dispatch({type: DELETING_POST});
    return axios
        .post('/deletePost', postID, {headers: {token: localStorage.getItem('token')}})
        .then((res) => {
            dispatch({ type: POST_DELETED, payload: res.data});
        })
        .catch((err) => {
            dispatch({type: DELETE_POST_ERROR, payload: err})
        });
};

