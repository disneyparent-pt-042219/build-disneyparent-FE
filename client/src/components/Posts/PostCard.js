import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import {
  PostCardDiv,
  PostCardBody,
  PostCardLabels,
  PostCardInformation,
  PostCardSingleLabel,
  PostCardHeader,
  PostCardDelete
} from '../Elements/PostCard';

function PostCard(props) {
  const postPage = `post/${props.index}`;
  const time = props.post.meetup_date.concat(' ', props.post.meetup_time);
  const meetDate = moment(time).format('MMMM Do YYYY, h:mm:ss a');
  const postTime = moment.parseZone(props.post.created_at)
    .startOf('day,hour')
    .fromNow();
    console.log(props)
  // props.post.meetup_date props.post.meetup_time
  return (

    <Link to={postPage} >
      <PostCardDiv>
        <PostCardHeader>
            <div>
              <i className="fas fa-user-circle" />
              {' '}
              Posted by {' '}
              {props.post.family_id} {' '}
              {postTime}
            </div>
           {props.deleteFunction && 
              <PostCardDelete onClick={props.deleteFunction(props.post.id)}> 
                  <i className="fas fa-trash-alt" /> 
              </PostCardDelete> }
        </PostCardHeader>
        <PostCardBody>
          <PostCardLabels>
            <PostCardSingleLabel>Attraction:</PostCardSingleLabel>
            <PostCardSingleLabel>Time:</PostCardSingleLabel>
            <PostCardSingleLabel>No. of Kids:</PostCardSingleLabel>
          </PostCardLabels>
          <PostCardInformation>
            <PostCardSingleLabel>{props.post.attraction}</PostCardSingleLabel>
            <PostCardSingleLabel>{meetDate}</PostCardSingleLabel>
            <PostCardSingleLabel>
              {props.post.num_of_children}
            </PostCardSingleLabel>
          </PostCardInformation>
        </PostCardBody>
        <div className="post-comment">
            
          </div>
      </PostCardDiv>

    </Link>
  );
}

export default PostCard;
