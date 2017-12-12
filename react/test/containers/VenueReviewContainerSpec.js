import React, { Component } from 'react';
import ReviewTile from "../../src/components/ReviewTile";
import VenueReviewContainer from "../../src/containers/VenueReviewContainer";
import { Link } from 'react-router';

describe ('VenueReviewContainer', () => {
  let wrapper;
  let review = [{
    id: 1,
    rating: 1,
    review_text: "This place smells like feet!",
    user: {
      id: 1,
      first_name: "Mark",
      last_name: "Davis",
      email: "markdavis.070@gmail.com",
      created_at: "2017-12-12T16:08:23.362Z",
      updated_at: "2017-12-12T16:08:23.374Z",
      role: "member"
    },
    upvotes: 0,
    downvotes: 0,
    created_at: "2017-12-12T16:09:41.809Z"
  }]

  beforeEach(() => {

    spyOn(global, 'fetch').and.callFake(() => {
      let responseBody = JSON.stringify(review);
      let response = new Response(responseBody, {
        status: '200',
        statusText: 'OK',
        headers: { 'Content-Type': 'application/json' }
      });
      return Promise.resolve(response);
    });

    wrapper = mount(<VenueReviewContainer />);

  });

  // it('should display a review tile', () => {
  //   expect(wrapper.find('ReviewTile')).toBePresent;
  // });

})
