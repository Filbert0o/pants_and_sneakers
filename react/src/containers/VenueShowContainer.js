import React, { Component } from 'react';
import VenueShowTile from "../components/VenueShowTile"
import ReviewTile from "../components/ReviewTile"

class VenueShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venue: {},
      reviews: []
    }
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
<<<<<<< HEAD
        venue: body
||||||| merged common ancestors
       venue: body
=======
       venue: body,
       reviews: body.reviews
>>>>>>> 9537c0391783382ce27e53b6282fc08e0f576582
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
