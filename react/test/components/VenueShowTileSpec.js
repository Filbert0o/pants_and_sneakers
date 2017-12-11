import VenueShowTile from '../../src/components/VenueShowTile';
import { mount } from "enzyme"
import React from "react"
import jasmineEnzyme from "jasmine-enzyme"

describe('VenueShowTile', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <VenueShowTile
        id={1}
        name="Tattooed Moms"
        address="504 south st."
        city="Philadelphia"
        state="PA"
        zip="19109"
        website="google.com"
        ageRestriction="21+"
        foodOptions="bar food"
        parking='none'
        hours="monday - sunday"
        phone="215-555-5555"
        dressCode="suit"
        coverCharge="5 bucks"
        cashOnly='none'
        imageUrl="http://blackonthecanvas.com/wp-content/uploads/2014/04/IMG_6260-1024x683.jpg"
      />
    )
  })

  it('should render div, img tags', () => {
    expect(wrapper.find('div','img')).toBePresent();
  });

  it('should render a div tag with props', () => {
    expect(wrapper.find('div').text()).toBe('Tattooed Moms504 south st.PhiladelphiaPA19109google.com21+bar foodmonday - sunday215-555-5555suit5 bucks')
  });

  it('should render an img tag with the specific props', () => {
    expect(wrapper.find('img').props()).toEqual({
      src: 'http://blackonthecanvas.com/wp-content/uploads/2014/04/IMG_6260-1024x683.jpg'
    });
  });
})
