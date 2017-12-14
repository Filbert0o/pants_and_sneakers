import React, { Component } from 'react';
import { Link } from 'react-router';
import Autosuggest from 'react-autosuggest';

const venues = [];

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      suggestions: [],
      venues: []
    };

    this.onChange = this.onChange.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    this.getSuggestions = this.getSuggestions.bind(this);
    this.renderSuggestion = this.renderSuggestion.bind(this);
  }

  onChange(event, { newValue }) {
    this.setState({
      value: newValue
    });
  }

  onSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  }

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    });
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
       venues: body.venues
     });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    this.getVenues();
  }

  getSuggestions(value) {
    let inputValue = value.trim().toLowerCase();
    let inputLength = inputValue.length;

    return inputLength === 0 ? [] : this.state.venues.filter(venue =>
    venue.name.toLowerCase().slice(0, inputLength) === inputValue
  );
  }

  getSuggestionValue(suggestion) { return suggestion.name; }

  renderSuggestion(suggestion) {
    return(
      <div>
        <Link to={`/venues/${suggestion.id}`} style={{ textDecoration: 'none', color: '#fff' }}>{suggestion.name}</Link>
      </div>
    )
  }

  render() {

    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Search for a venue',
      value,
      onChange: this.onChange
    };  

    return (
      <div className='suggestions-container'>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        />
      </div>
    );
  }
}

export default SearchBar;
