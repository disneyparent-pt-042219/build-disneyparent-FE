import {
  FETCHING_COMMENTS,
  GOT_COMMENTS,
  COMMENTS_ERROR,
  ADDING_COMMENT,
  ADDED_COMMENT,
  ADDING_COMMENT_ERROR,
  EDITING_COMMENT,
  EDITED_COMMENT,
  EDIT_COMMENT_ERROR,
  DELETING_COMMENT,
  DELETED_COMMENT,
  DELETED_COMMENT_ERROR,
} from '../Actions/CommentsActions';

const initialState = {
  comments: [],
  fetchingComments: false,
  fetchingError: false,
  addingComment: false,
  addingCommentError: '',
  editingComment: false,
  editingCommentError: '',
  deletingComment: false,
  deletingCommentError: '',
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_COMMENTS:
      return {
        ...state,
        fetchingComments: true,
      };
    case GOT_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        fetchingComments: false,
      };
    case COMMENTS_ERROR:
      return {
        ...state,
        fetchingComments: false,
        fetchingError: action.payload,
      };
    case ADDING_COMMENT:
      return {
        ...state,
        addingComment: true,
      };
    case ADDED_COMMENT:
      return {
        ...state,
        addingComment: false,
        comments: [...state.comments, action.payload],
      };
    case ADDING_COMMENT_ERROR:
      return {
        addingComment: false,
        addingCommentError: action.payload,
      };
    case EDITING_COMMENT:
      return {
        ...state,
        editingComment: true,
      };
    case EDITED_COMMENT:
      return {
        ...state,
        editingComment: false,
        comments: state.comments.map(comment => (comment.id === action.payload.id
            ? { ...comment, comment: action.payload.comment }
            : comment),),
      };
    case EDIT_COMMENT_ERROR:
      return {
        editingComment: false,
        editingCommentError: action.payload,
      };
    case DELETING_COMMENT:
      return {
        ...state,
        deletingComment: true,
      };
    case DELETED_COMMENT:
      return {
        ...state,
        deletingComment: false,
        comments: state.comments.filter(
          comment => comment.id !== action.payload.id,
        ),
      };
    case DELETED_COMMENT_ERROR:
      return {
        ...state,
        deletingComment: false,
        deletingCommentError: action.payload,
      };
    default:
      return state;
  }
};

export default commentsReducer;
