import React from 'react';

function PostCard(props){

    return (

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
    )
}

export default PostCard;