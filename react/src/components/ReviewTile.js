import React from 'react';

const ReviewTile = props => {
  return(
    <div className='review-tile'>
      <h3>Rating: {props.rating}/5</h3>
      <p>{props.review_text}</p>
      Reviewed by: {props.user.first_name} {props.user.last_name}
      Upvote: {props.upvotes}
      Downvote: {props.downvotes}
    </div>
  )
}
export default ReviewTile;
