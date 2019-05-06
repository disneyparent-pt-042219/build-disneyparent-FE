import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostCard from './PostCard';
import { PostCardsContainer } from '../Elements/PostCard';
import { FormInput } from '../Elements';

import { getPosts } from '../../Actions/PostActions';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  componentDidMount() {
    const { getPosts } = this.props;
    getPosts();
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      search: e.target.value,
    });
  };

  render() {
    const { posts } = this.props;
    // Filter posts by attraction
    const filteredPost = this.props.posts.filter(
      post => post.attraction
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1,
    );
    const { search } = this.state;
    return (
      <>
        <FormInput
          placeholder="Filter by attraction..."
          value={search}
          onChange={this.handleChange}
        />
        <PostCardsContainer>
          {filteredPost.map((post, index) => (
            <div className="post-card" key={post.id}>
              <PostCard post={post} index={index} />
            </div>
          ))}
        </PostCardsContainer>
      </>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts,
});

export default connect(
  mapStateToProps,
  { getPosts },
)(Posts);
