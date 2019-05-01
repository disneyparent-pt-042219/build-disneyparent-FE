import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                    <div className="post-header">
                        <span><i className="fas fa-user-circle" /> Posted by {post.username} {post.timestamp}</span>
                        {/* add edit and delete post icons */}
                    </div>
                    <div className="post-body">
                        <div className="post-labels">
                            <span>Attraction:</span>
                            <span>Time:</span>
                            <span>No. of Kids:</span>
                        </div>
                        <div className="post-information">
                            <span> {post.attraction} </span>
                            <span> {post.date} {post.time}</span>
                            <span> {post.kids} </span>
                        </div>
                        <div className="post-comment">

                        </div>
                    </div>

                </div>
            ))}

        );
    }

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
};