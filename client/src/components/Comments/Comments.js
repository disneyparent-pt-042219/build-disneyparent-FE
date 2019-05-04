import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getComments } from '../../Actions/CommentsActions';
import Comment from './Comment';

class Comments extends Component {
  componentDidMount() {
    const { getComments } = this.props;
    getComments();
  }

  render() {
    const { comments } = this.props;
    return (
      <div>
        {comments.map(comment => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </div>
    );
  }
}

Comments.propTypes = {
  getComments: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      comment: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({
  comments: state.comments.comments,
});

export default connect(
  mapStateToProps,
  { getComments },
)(Comments);
