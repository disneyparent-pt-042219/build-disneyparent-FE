import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PostCard from './PostCard';
import { withRouter } from 'react-router-dom';
import { PostCardsContainer } from '../Elements/PostCard';

import { getPosts, deletePost } from '../../Actions/PostActions';

class MyPosts extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    const { getPosts } = this.props;
    getPosts();
  }

  deletePost = (postID) => (event) => {

    const { deletePost, history } = this.props;
    deletePost(postID).then(() => {
      history.push('/home');
    });
  }

  render() {
    const { posts } = this.props;
    const user = localStorage.getItem('username');
    return (
      <PostCardsContainer>
        {posts
          .filter(post => post.family_id === user)
          .map((post, index) => (
            <div className="post-card" key={post.id}>
              <PostCard post={post} index={index} deleteFunction={this.deletePost}/>
            </div>
          ))}
      </PostCardsContainer>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts,
});

export default compose(
  withRouter,
  connect(
  mapStateToProps,
  { getPosts, deletePost },
  ),
)(MyPosts);
