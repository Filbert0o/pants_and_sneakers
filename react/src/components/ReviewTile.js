import React from 'react';

const ReviewTile = props => {
  let handleVoteSubmit = () => {
    props.handleVoteSubmit(props.id)
  }
  return(
    <div className='rt'>
      <h6>Reviewed by: {props.user.first_name} {props.user.last_name}</h6>
      <h6>Rating: {props.rating}/5</h6>
      <h6>Review: {props.review_text}</h6>
      <h6>Upvote: {props.upvotes}.</h6>
      <button onChange={props.handleVoteConfirm} value={1} onClick={handleVoteSubmit}>Like</button>
      <h6>Downvote: {props.downvotes}</h6>
      <button onChange={props.handleVoteConfirm} value={2} onClick={handleVoteSubmit}>Dislike</button>
    </div>
  )
}
export default ReviewTile;
