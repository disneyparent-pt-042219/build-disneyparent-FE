import axios from 'axios';

// Fetching comments
export const FETCHING_COMMENTS = 'FETCHING_COMMENTS';
export const GOT_COMMENTS = 'GOT_COMMENTS';
export const COMMENTS_ERROR = 'COMMENTS_ERROR';

// Posting comments
export const ADDING_COMMENT = 'ADDING_COMMENT';
export const ADDED_COMMENT = 'ADDED_COMMENT';
export const ADDING_COMMENT_ERROR = 'ADDING_COMMENT_ERROR';

// Editing comments
export const EDITING_COMMENT = 'EDITING_COMMENT';
export const EDITED_COMMENT = 'EDITED_COMMENT';
export const EDIT_COMMENT_ERROR = 'EDIT_COMMENT_ERROR';

// Deleting comment
export const DELETING_COMMENT = 'DELETING_COMMENT';
export const DELETED_COMMENT = 'DELETED_COMMENT';
export const DELETED_COMMENT_ERROR = 'DELETED_COMMENT_ERROR';

// Todo update get URL once backend is complete
export const getComments = postId => (dispatch) => {
  dispatch({ type: FETCHING_COMMENTS });
  axios
    .get(`/posts/${postId}`, {
      headers: { token: localStorage.getItem('token') },
    })
    .then((res) => {
      dispatch({ type: GOT_COMMENTS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: COMMENTS_ERROR, payload: err });
    });
};

// Todo update get URL once backend is complete
export const postComment = postId => (dispatch) => {
  dispatch({ type: ADDING_COMMENT });
  return axios
    .post(`/addcomment/${postId}`, {
      headers: { token: localStorage.getItem('token') },
    })
    .then((res) => {
      dispatch({ type: ADDED_COMMENT, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: ADDING_COMMENT_ERROR, payload: err });
    });
};

// Todo update get URL once backend is complete
export const editComment = commentId => (dispatch) => {
  dispatch({ type: EDITING_COMMENT });
  return axios
    .put(`/comments/${commentId}`, {
      headers: { token: localStorage.getItem('token') },
    })
    .then((res) => {
      dispatch({ type: EDITED_COMMENT, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: EDIT_COMMENT_ERROR, payload: err });
    });
};

// Todo update get URL once backend is complete
export const deleteComment = commentId => (dispatch) => {
  dispatch({ type: DELETING_COMMENT });
  axios
    .delete(`/comments/${commentId}`)
    .then((res) => {
      dispatch({ type: DELETED_COMMENT, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: DELETED_COMMENT_ERROR, payload: err });
    });
};
