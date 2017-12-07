import VenueShowContainer from '../../src/containers/VenueShowContainer';
import VenueShowTile from '../../src/components/VenueShowTile';

describe ('VenuesShowContainer', () => {
  let wrapper;
  let venue1 = {
    id: 1,
    name: "Tattooed Moms",
    address: "504 south st.",
    city: "Philadelphia",
    state: "PA",
    zip: "19109",
    website: "google.com",
    age_restriction: "21+",
    food_options: "bar food",
    parking: false,
    hours: "monday - sunday",
    phone: "215-555-5555",
    dress_code: "suit",
    cover_charge: "5 bucks",
    cash_only: false,
    image_url: "http://blackonthecanvas.com/wp-content/uploads/2014/04/IMG_6260-1024x683.jpg",
    created_at: "Tue, 05 Dec 2017 21:30:13 UTC +00:00",
    updated_at: "Tue, 05 Dec 2017 21:30:13 UTC +00:00"
  }

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(
      <VenueShowContainer
        params={{id:1}}
      />
    )

    spyOn(global, 'fetch').and.callFake(() => {
      let responseBody = JSON.stringify({
        message: venue1
      });
      let response = new Response(responseBody, {
        status: '200',
        statusText: 'OK',
        headers: { 'Content-Type': 'application/json' }
      });
      return Promise.resolve(response);
    })
  });

  it('should have an initial state as an empty hash', () => {
    expect(wrapper.state()).toEqual({ venue: {} })
  });

  it('should render a div tag', (done) => {
    setTimeout(() => {
      expect(wrapper.find('div')).toBePresent();
      done();
    }, 0)
  });

  it('should render a VenuesShowTile Component', () => {
    expect(wrapper.find(VenueShowTile)).toBePresent();
  });

  it('should render the VenueShowTile with different props, when venues is not an empty array', () => {
    setTimeout(() => {
    expect(wrapper.find(VenueShowTile).props()).toEqual({
      id: 1,
      name: "Tattooed Moms",
      address: "504 south st.",
      city: "Philadelphia",
      state: "PA",
      zip: "19109",
      website: "google.com",
      ageRestriction: "21+",
      foodOptions: "bar food",
      parking: false,
      hours: "monday - sunday",
      phone: "215-555-5555",
      dressCode: "suit",
      coverCharge: "5 bucks",
      cashOnly: false,
      imageUrl: "http://blackonthecanvas.com/wp-content/uploads/2014/04/IMG_6260-1024x683.jpg",
    })
    done();
    }, 0)
  });
})
