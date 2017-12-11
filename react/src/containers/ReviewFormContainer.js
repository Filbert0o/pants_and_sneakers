import React, { Component } from 'react';
import TextField from '../components/TextField';
import SelectField from '../components/SelectField';

class ReviewFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: '',
      review_text: '',
      venue_id: this.props.params.venue_id,
      errors: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  handleChange(event) {
    let newKey = event.target.name;
    let newValue = event.target.value;
    this.setState({
      [newKey]: newValue
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let formPayload = {
      rating: this.state.rating,
      review_text: this.state.review_text,
      venue_id: this.state.venue_id
    };
    this.addNewReview(formPayload);
    this.handleClearForm(event);
  }

  processResponse(response) {
    return new Promise((resolve, reject) => {
      let func;
      response.status < 400 ? func = resolve : func = reject;
      response.json().then(data => func({'status': response.status,
                                         'statusText': response.statusText,
                                         'data': data
                                       })
                          );
    });
  }

  addNewReview(newReview) {
    fetch('/api/v1/reviews', {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(newReview),
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => this.processResponse(response))
    .then(body => {
      browserHistory.push(`/reviews`);
    })
    .catch(response => {
      this.setState({
        errors: response.data.errors
      });
      let errorMessage = `${response.status} (${response.statusText})`;
      console.error(`Error in fetch: ${errorMessage}`);
    });
  }

  handleClearForm(event){
    event.preventDefault();
    this.setState({
      rating: '',
      review_text: '',
    });
  }

  render() {
    return(
      <div>
        <div id='errors'>
          {this.state.errors}
        </div>
        <form className="new-review-form callout" onSubmit={this.handleFormSubmit}>
          <SelectField
            content={this.state.rating}
            label="Rating*"
            name="rating"
            options={[1, 2, 3, 4, 5]}
            onChange={this.handleChange}
          />
          <TextField
            content={this.state.review_text}
            label="Review"
            name="review_text"
            onChange={this.handleChange}
          />
          <div className="button-group">
            <button className="button" onClick={this.handleClearForm} >Clear</button>
            <input className="button" type="submit" value="Submit" />
          </div>
        </form>
    </div>
    );
  }
}
export default ReviewFormContainer;
