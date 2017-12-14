import React, { Component } from 'react';
import { Link } from 'react-router';
import VenueShowTile from "../components/VenueShowTile"
import ReviewTile from "../components/ReviewTile"

class VenueShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venue: {},
      reviews: [],
      upvoteNumber: 0,
      downvoteNumber: 0,
      vote: []
    }
    this.upVote = this.upVote.bind(this)
    this.downVote = this.downVote.bind(this)
    this.vote = this.vote.bind(this)
  }


  upVote(reviewId) {
    let newVote = {
      value: 1,
      review_id: reviewId
    }

    this.vote(newVote)
  }

  downVote(reviewId) {
    let newVote = {
      value: -1,
      review_id: reviewId
    }
    this.vote(newVote)
  }

  vote(userVote){
    fetch(`/api/v1/venues/${this.props.params.id}/reviews/${userVote.review}/votes`, {
      credentials: 'same-origin',
      method: "POST",
      body: JSON.stringify(userVote),
      headers: {'Content-Type': 'application/json'}
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
        reviews: body
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  getVenue() {
    let venueId = this.props.params.id

    fetch(`/api/v1/venues/${venueId}`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
       venue: body,
       reviews: body.reviews
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount(){
    this.getVenue()
  }

  mapReviews() {
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
          upVote={this.upVote}
          downVote={this.downVote}
        />
      );
    })
    return reviews;
  }

  render() {
    return(
      <div>
        <VenueShowTile
          key={this.state.venue.id}
          id={this.state.venue.id}
          name={this.state.venue.name}
          address={this.state.venue.address}
          city={this.state.venue.city}
          state={this.state.venue.state}
          zip={this.state.venue.zip}
          website={this.state.venue.website}
          ageRestriction={this.state.venue.age_restriction}
          foodOptions={this.state.venue.food_options}
          parking={this.state.venue.parking}
          hours={this.state.venue.hours}
          phone={this.state.venue.phone}
          dressCode={this.state.venue.dress_code}
          coverCharge={this.state.venue.cover_charge}
          cashOnly={this.state.venue.cash_only}
          imageUrl={this.state.venue.image_url}
        />
        <div id='review-container' className='clearfix'>
          <div id='review-container-header'>
            <h2>Reviews:</h2><Link to={`/venues/${this.state.venue.id}/reviews/new`} id='add-review-button'>+ Add Review</Link>
          </div>
          {this.mapReviews()}
        </div>
      </div>
    );
  }
}
export default VenueShowContainer;
