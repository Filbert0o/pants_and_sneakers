import React, { Component } from 'react';
import ReviewTile from "../components/ReviewTile";
import { Link } from 'react-router';

class VenueReviewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
    this.getReview = this.getReview.bind(this)
  }

  getReview() {
    let venue_id = this.props.venueId
    fetch(`/api/v1/venues/${venue_id}/reviews`, {
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
       reviews: body,
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    this.getReview()
  }

  render() {

    let reviews = this.state.reviews.map(review => {
      return(
        <ReviewTile
          key={review.id}
          id={review.id}
          rating={review.rating}
          review_text={review.review_text}
          user={review.user}
          upvotes={review.upvotes}
          downvotes={review.downvotes}
        />
      )
    })
    return(
      <div>
        <button><Link to={`/venues/${this.props.venueId}/reviews/new`}>Submit Review</Link></button>
        {reviews}
      </div>
    )
  }
}
export default VenueReviewContainer;
