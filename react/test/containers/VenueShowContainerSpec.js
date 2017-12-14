import VenueShowTile from '../../src/components/VenueShowTile';
import VenueShowContainer from '../../src/containers/VenueShowContainer';
import ReviewTile from '../../src/components/ReviewTile'

describe ('VenueShowContainer', () => {
  let wrapper;
  let venue1 = {
    "id": 1,
    "name": "Tattooed Mom",
    "address": "504 South St.",
    "city": "Philadelphia",
    "state": "PA",
    "zip": "19109",
    "website": 'google.com',
    "age_restriction": "21+",
    "food_options": "bar food",
    "parking": 'false',
    "hours": 'monday - sunday',
    "phone": "215-555-5555",
    "dress_code": "suit",
    "cover_charge": "5 bucks",
    "cash_only": "false",
    "image_url": "http://blackonthecanvas.com/wp-content/uploads/2014/04/IMG_6260-1024x683.jpg",
    "reviews": [
      {
        "id": 1,
        "rating": 1,
        "review_text": "This place smells like feet!",
        "upvotes": 0,
        "downvotes": 0,
        "created_at": "2017-12-12T16:09:41.809Z",
        "user": {
          "id": 1,
          "first_name": "Mark",
          "last_name": "Davis",
          "email": "markdavis.070@gmail.com",
          "created_at": "2017-12-12T16:08:23.362Z",
          "updated_at": "2017-12-12T16:08:23.374Z",
          "role": "member"
        }
      },
      {
        "id": 2,
        "rating": 2,
        "review_text": "The toilet is disgusting.",
        "upvotes": 0,
        "downvotes": 0,
        "created_at": "2017-12-12T16:49:24.043Z",
        "user": {
          "id": 1,
          "first_name": "Mark",
          "last_name": "Davis",
          "email": "markdavis.070@gmail.com",
          "created_at": "2017-12-12T16:08:23.362Z",
          "updated_at": "2017-12-12T16:08:23.374Z",
          "role": "member"
        }
      }
    ]
  }

  beforeEach(() => {

    spyOn(global, 'fetch').and.callFake(() => {
      let responseBody = JSON.stringify(venue1);
      let response = new Response(responseBody, {
        credentials: 'same-origin',
        status: '200',
        statusText: 'OK',
        headers: { 'Content-Type': 'application/json' }
      });
      return Promise.resolve(response);
    })

    wrapper = mount(
      <VenueShowContainer
        params={{id: 1}}
      />
    )
  });

  it('should have an initial state as an empty hash', () => {
    expect(wrapper.state()).toEqual({ venue: {}, reviews: [] })
  });

  it('should render a div tag', (done) => {
    setTimeout(() => {
      expect(wrapper.find('div')).toBePresent();
      done();
    }, 0)
  });

  it('should render a VenueShowTile Component', () => {
    expect(wrapper.find(VenueShowTile)).toBePresent();
  });

  it('should render the VenueShowTile with different props, when venues is not an empty array', (done) => {
    setTimeout(() => {
      expect(wrapper.find(VenueShowTile).props()).toEqual({
        id: 1,
        name: "Tattooed Mom",
        address: "504 South St.",
        city: "Philadelphia",
        state: "PA",
        zip: "19109",
        website: "google.com",
        ageRestriction: "21+",
        foodOptions: "bar food",
        parking: 'false',
        hours: "monday - sunday",
        phone: "215-555-5555",
        dressCode: "suit",
        coverCharge: "5 bucks",
        cashOnly: 'false',
        imageUrl: "http://blackonthecanvas.com/wp-content/uploads/2014/04/IMG_6260-1024x683.jpg",
      })
    done();
  }, 0)
  });

  it('should render a review tile for each review', (done) => {
    setTimeout( () => {
      expect(wrapper.find(ReviewTile).nodes[0].props).toEqual({
        "id": 1,
        "rating": 1,
        "review_text": "This place smells like feet!",
        "upvotes": 0,
        "downvotes": 0,
        "user": {
          "id": 1,
          "first_name": "Mark",
          "last_name": "Davis",
          "email": "markdavis.070@gmail.com",
          "created_at": "2017-12-12T16:08:23.362Z",
          "updated_at": "2017-12-12T16:08:23.374Z",
          "role": "member"
        },
        upVote: jasmine.any(Function),
        downVote: jasmine.any(Function)
      })

      expect(wrapper.find(ReviewTile).nodes[1].props).toEqual({
        "id": 2,
        "rating": 2,
        "review_text": "The toilet is disgusting.",
        "upvotes": 0,
        "downvotes": 0,
        "user": {
          "id": 1,
          "first_name": "Mark",
          "last_name": "Davis",
          "email": "markdavis.070@gmail.com",
          "created_at": "2017-12-12T16:08:23.362Z",
          "updated_at": "2017-12-12T16:08:23.374Z",
          "role": "member"
        },
        upVote: jasmine.any(Function),
        downVote: jasmine.any(Function)
      })
    done();
    }, 4000)
  })
})
