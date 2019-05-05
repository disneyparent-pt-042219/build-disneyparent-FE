import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostCard from './PostCard';


import { getPosts } from '../../Actions/PostActions';


class Posts extends Component {
    constructor(props){
        super()
    }


    componentDidMount(){
        const { getPosts } = this.props;
        getPosts()
    }

    render(){
        const { posts } = this.props;
        console.log(posts)
        return (
            <div>
                {posts.map((post, index) => (
                    <div className="post-card" key={post.id}>
                        <PostCard post={post} />
                    </div>
                ))}
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        posts: state.posts.posts
    }
};

export default connect(mapStateToProps, { getPosts } )(Posts)