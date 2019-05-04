import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostCard from '../Elements/PostCard';


import { getPosts } from 'actions/PostActions';


class Posts extends Component {
    constructor(){
        super()
    }


    componentDidMount(){
        getPosts()
    }

    render(){
        return (
    
            {this.props.posts.filter().map((post, index) => (
                <div class="post-card" key={index}>
                   <PostCard post={post} />
                </div>
            ))}

        );
    }
};

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
};

export default connect(mapStateToProps, { getPosts } )(Posts)