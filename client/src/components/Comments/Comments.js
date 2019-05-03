import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getComments } from '../../Actions/CommentsActions';
import Comment from './Comment';

class Comments extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    const { getComments } = this.props;
    const fetchedComments = getComments();
    this.setState({
      comments: fetchedComments,
    });
  }

  render() {
    const { comments } = this.state;
    return (
      <div>
        {comments.map(comment => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments.comments,
});

export default connect(
  mapStateToProps,
  { getComments },
)(Comments);
