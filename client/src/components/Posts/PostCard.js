import React from 'react';
import { Link } from 'react-router-dom';
import {
  PostCardDiv,
  PostCardBody,
  PostCardLabels,
  PostCardInformation,
  PostCardSingleLabel
} from '../Elements/PostCard';

function PostCard(props) {
  const postPage = 'post/' + props.index;
  return (
    <Link to={postPage}>
      <PostCardDiv>
        <div className='post-header'>
          <span>
            <i className='fas fa-user-circle' /> Posted by{' '}
            {props.post.family_id} {props.post.created_at}
          </span>
          {/* add edit and delete post icons */}
        </div>
        <PostCardBody>
          <PostCardLabels>
            <PostCardSingleLabel>Attraction:</PostCardSingleLabel>
            <PostCardSingleLabel>Time:</PostCardSingleLabel>
            <PostCardSingleLabel>No. of Kids:</PostCardSingleLabel>
          </PostCardLabels>
          <PostCardInformation>
            <PostCardSingleLabel> {props.post.attraction} </PostCardSingleLabel>
            <PostCardSingleLabel>
              {' '}
              {props.post.meetup_date} {props.post.meetup_time}
            </PostCardSingleLabel>
            <PostCardSingleLabel>
              {' '}
              {props.post.num_of_children}{' '}
            </PostCardSingleLabel>
          </PostCardInformation>
          <div className='post-comment' />
        </PostCardBody>
      </PostCardDiv>
    </Link>
  );
}

export default PostCard;
