import {
    FETCHING_POSTS,
    POSTS,
    FETCH_POSTS_ERROR,
    CREATING_POST,
    POST_CREATED,
    CREATE_POST_ERROR,
    EDITING_POST,
    POST_EDITED,
    EDIT_POST_ERROR,
    DELETING_POST,
    POST_DELETED,
    DELETE_POST_ERROR,
  } from '../Actions/PostActions';

  const initialState = {
    posts: [],
    postError: '',
    isFetchingPost: false,
    isCreatingPost: false,
    isEditingPost: false,
    isDeletingPost: false,
  };

  const PostsReducer = (state = initialState, action) => {
    switch (action.type){
      case FETCHING_POSTS:
        return {
          ...state, 
          isFetchingPost: true,
        };
      case POSTS:
        return {
          ...state,
          isFetchingPost: false,
          posts: action.payload,
        }
      case FETCH_POSTS_ERROR:
        return {
          ...state,
          isFetchingPost: false,
          postError: action.payload,
        }
      case CREATING_POST:
        return {
          ...state,
          isCreatingPost: true,
        }
      case POST_CREATED:
        return {
          ...state,
          isCreatingPost: false,
          posts: [...this.state.posts, action.payload],
        }
      case CREATE_POST_ERROR:
        return {
          ...state,
          isCreatingPost: false,
          postError: action.payload,
        }
      case EDITING_POST:
        return {
          ...state,
          isEditingPost: true,
        }
      case POST_EDITED:
        return {
          ...state,
          isEditingPost: false,
          posts: this.state.posts.map(post =>
            post.id === action.payload.id
              ? { ...action.payload }
              : post
          )
        }
      case EDIT_POST_ERROR:
        return {
          ...state,
          isEditingPost: false,
          postError: action.payload,
        }
      case DELETING_POST:
        return {
          ...state,
          isDeletingPost: true,
        }
      case POST_DELETED:
        return {
          ...state,
          isDeletingPost: false,
          posts: this.state.posts.filter(post => 
            post.id !== action.payload.id
          )
        }
      case DELETE_POST_ERROR:
        return {
          ...state,
          isDeletingPost: false,
          postError: action.payload,
        }
      default:
        return state;
    }
  }

  export default PostsReducer;