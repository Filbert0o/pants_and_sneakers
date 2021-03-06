import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import VenuesIndexTile from '../components/VenuesIndexTile';
import VenueFormContainer from './VenueFormContainer';


class VenuesIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: [],
      currentUser: null,
      currentPage: 1,
      venuesPerPage: 5
    };
    this.handleClick = this.handleClick.bind(this);
    this.handlePagination = this.handlePagination.bind(this);
    this.getVenues = this.getVenues.bind(this);
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
     });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    this.getVenues();
  }

  handleClick(event) {
    event.preventDefault();
    browserHistory.push('/venues/new');
  }

  handlePagination(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }


  render() {
    // Logic for displaying Venues
    const indexOfLastVenue = this.state.currentPage * this.state.venuesPerPage;
    const indexOfFirstVenue = indexOfLastVenue - this.state.venuesPerPage;
    const currentVenues = this.state.venues.slice(indexOfFirstVenue, indexOfLastVenue);

    let venues = currentVenues.map((venue) => {
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
      button = <Link to={`/venues/new`} className='custom-button' id='add-new-venue-button'>Submit A New Venue</Link>
    }
    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.state.venues.length / this.state.venuesPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      let buttonclass;
      if(this.state.currentPage == number) {
        buttonclass = 'custom-button active'
      } else {
        buttonclass = 'custom-button'
      }
      return (
        <div
          className={buttonclass}
          key={number}
          id={number}
          onClick={this.handlePagination}
        >
          {number}
        </div>
      )
    })

    return(
      <div>
        <div>
          {button}
        </div>
        <div>
          {venues}
        </div>
        <div id='pagination'>
          <div id='page-number-container'>
            {renderPageNumbers}
          </div>
        </div>
      </div>
    )
  }
}
export default VenuesIndexContainer;
