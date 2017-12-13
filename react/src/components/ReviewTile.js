import React from 'react';

const ReviewTile = props => {
  return(
    <div className='rt'>
      <h6>Reviewed by: {props.user.first_name} {props.user.last_name}</h6>
      <h6>Rating: {props.rating}/5</h6>
      <h6>Review: {props.review_text}</h6>
      <h6>Upvote: {props.upvotes}.</h6>
      <h6>Downvote: {props.downvotes}</h6>
    </div>
  )
}
export default ReviewTile;
