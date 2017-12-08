import React, { Component } from 'react';
import { Link } from 'react-router';
import VenuesIndexTile from '../components/VenuesIndexTile';
import VenueFormContainer from "./VenueFormContainer"


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

  postVenue(formPayload) {
    fetch('api/v1/venues', {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(formPayload),
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
      debugger
      this.setState({

      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
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
      <div>
        <button><Link to={`/venues/new`}>Submit A New Venue</Link></button>
        {venues}
      </div>
    )
  }
}
export default VenuesIndexContainer;
