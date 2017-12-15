import React from 'react';

const ReviewTile = props => {

  let upVote = () => {
    props.upVote(props.id)
  }
  let downVote = () => {
    props.downVote(props.id)
  }
  return(
    <div className='review-tile'>
      <h3>Rating: {props.rating}/5</h3>
      <p>{props.review_text}</p>
      <p>Reviewed by: {props.user.first_name} {props.user.last_name}</p>
      <span className='custom-button tile-button' onClick={upVote}><i className="far fa-thumbs-up"></i> Like <span className='numbers'>{props.upvotes}</span></span>
      <span className='custom-button tile-button' onClick={downVote}><i className="far fa-thumbs-down"></i> Dislike <span className='numbers'>{props.downvotes}</span></span>
    </div>
  )
}
export default ReviewTile;
