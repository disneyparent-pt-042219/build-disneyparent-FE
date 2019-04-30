import {
    FETCHING_POSTS,
    POSTS,
    POST_ERROR,
    CREATE_NEW_POST,
    EDIT_POST,
  } from '../Actions/PostActions';

  const initialState = {
    posts: [],
    postError: '',
    isFetchingPost: false,
    isCreatingPost: false,
  };

  const PostsReducer = (state = initialState, action) => {
    switch (action.type){
      default:
        return state;
    }
  }

  export default PostsReducer;