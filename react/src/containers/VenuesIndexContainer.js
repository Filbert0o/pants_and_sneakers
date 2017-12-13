import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import VenuesIndexTile from '../components/VenuesIndexTile';
import VenueFormContainer from "./VenueFormContainer"


class VenuesIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: [],
      currentUser: null
    }
    this.handleClick = this.handleClick.bind(this)
    this.getVenues = this.getVenues.bind(this)
  }

  getVenues() {
    fetch('/api/v1/venues', {
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
       venues: body.venues,
       currentUser: body.current_user
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    this.getVenues();
  }

  handleClick(event) {
    event.preventDefault();
    browserHistory.push('/venues/new')
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
    let button;
    if (!!this.state.currentUser) {
      button = <button><Link to={`/venues/new`}>Submit A New Venue</Link></button>
    }

    return(
      <div className='row'>
        {button}
        {venues}
      </div>
    )
  }
}
export default VenuesIndexContainer;
