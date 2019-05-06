import React, { Component } from 'react';
import CommentsForm from '../Comments/CommentsForm';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Container from '../Elements/Container';
import PostCard from '../Posts/PostCard';
import { compose } from 'redux';
import { getSinglePost } from '../../Actions/PostActions';

class SinglePost extends Component {

  componentDidMount(){
    const { getSinglePost, match } = this.props;
    const id = parseInt(match.params.id);
    getSinglePost(id)
  }

  render() {
    const { singlePost } = this.props;
    console.log(this.props)
    return (
      <Container>

        {/* <div className="post-card" key={singlePost.id}>
          <PostCard post={singlePost}/>
        </div> */}
        <CommentsForm />
        
      </Container>
    )
  }
};

const mapStateToProps = state => {
  return {
      singlePost: state.singlePost
  }
};

export default compose(
  withRouter,
  connect(
    mapStateToProps, 
    { getSinglePost },
  ),
)(SinglePost);
