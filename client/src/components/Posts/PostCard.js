import React from 'react';

function PostCard(props){

    return (
        <div>
        <div className="post-header">
            <span><i className="fas fa-user-circle" /> Posted by {props.post.username} {props.post.timestamp}</span>
                {/* add edit and delete post icons */}
        </div>
        <div className="post-body">
            <div className="post-labels">
                <span>Attraction:</span>
                <span>Time:</span>
                <span>No. of Kids:</span>
            </div>
            <div className="post-information">
                <span> {props.post.attraction} </span>
                <span> {props.post.meetup_date} {props.post.meetup_time}</span>
                <span> {props.post.num_of_children} </span>
            </div>
            <div className="post-comment">

            </div>
        </div>
        </div>
    )
}

export default PostCard;