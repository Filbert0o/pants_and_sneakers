import React, { Component } from 'react';
import VenuesIndexTile from "../components/VenuesIndexTile"

class VenuesIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: []
    }
  }

  getVenues () {
    fetch('/api/v1/venues')
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
       venues: body
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    this.getVenues();
  }

  render() {
    let venues = this.state.venues.map((venue) => {
      return(
        <VenuesIndexTile
          key={venue.id}
          id={venue.id}
          name={venue.name}
          address={venue.address}
          city={venue.city}
          state={venue.state}
          zip={venue.zip}
          imageUrl={venue.image_url}
        />
      )
    })
    return(
      <div className='row'>
        {venues}
      </div>
    )
  }
}
export default VenuesIndexContainer;
