import VenuesIndexTile from '../../src/components/VenuesIndexTile';
import { mount } from "enzyme"
import React from "react"
import jasmineEnzyme from "jasmine-enzyme"

describe('VenuesIndexTile', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <VenuesIndexTile
        key={1}
        id={1}
        name="Tattooed Moms"
        address="504 south st."
        city="Philadelphia"
        state="PA"
        zip="19109"
        imageUrl="http://blackonthecanvas.com/wp-content/uploads/2014/04/IMG_6260-1024x683.jpg"
      />
    )
  })

  it('should render div, img tags', () => {
    expect(wrapper.find('div','img')).toBePresent();

  });

  it('should render a div tag with props', () => {
    expect(wrapper.find('div').text()).toBe('Tattooed Moms504 south st.PhiladelphiaPA19109')
  });

  it('should render an img tag with the specific props', () => {
    expect(wrapper.find('img').props()).toEqual({
      src: 'http://blackonthecanvas.com/wp-content/uploads/2014/04/IMG_6260-1024x683.jpg'
    });
  });
})
