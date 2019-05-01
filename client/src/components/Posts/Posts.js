import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostCard from '../Elements/PostCard';

//import { getPosts } from 'actions/PostActions';


//todo convert this into map over PostCards in elements.
class Posts extends Component {
    constructor(){
        super()
    }


    componentDidMount(){
        //getPosts()
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

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
};