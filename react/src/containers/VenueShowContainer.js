import React, { Component } from 'react';
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
      vote: 0
    }
    this.handleVoteSubmit = this.handleVoteSubmit.bind(this)
    this.handleVoteConfirm = this.handleVoteConfirm.bind(this)
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
      value: 2,
      review_id: reviewId
    }
    this.vote(newVote)
  }

  vote(vote){
    fetch(`/api/v1/venues/${this.props.params.id}/reviews/${vote.review_id}/votes`, {
      credentials: 'same-origin',
      method: "POST",
      body: JSON.stringify(vote),
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
        reviews: body.reviews
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  updateVote(reviewId){
    let newVote = {
      upvotes: this.state.upvoteNumber,
      downvotes: this.state.downvoteNumber
    }
    fetch(`/api/v1/reviews/${reviewId}`, {
      credentials: 'same-origin',
      method: 'PATCH',
      body: JSON.stringify(newVote),
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => {
      debugger
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
      debugger
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleVoteConfirm(event) {
    this.setState({
      vote: event.target.value
    })
  }

  handleVoteChange() {
    if(this.state.vote === 0){
    }
    else if (vote === 1) {
      this.setState({
        upvoteNumber: this.state.upvoteNumber += 1
      });
    }
    else if (this.state.vote === 2) {
      this.setState({
        downvoteNumber: this.state.downvoteNumber += 1
      })
    }
  }

  handleVoteSubmit(reviewId) {
    //event.preventDefault();
    this.handleVoteChange();
    this.updateVote(reviewId);
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
          handleVoteSubmit={this.handleVoteSubmit}
          handleVoteConfirm={this.handleVoteConfirm}
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
        <div>
          {this.mapReviews()}
        </div>
      </div>
    );
  }
}
export default VenueShowContainer;
