import VenuesIndexTile from '../../src/components/VenuesIndexTile';

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

  it('should render div tags', () => {
    expect(wrapper.find('div')).toBePresent();
  });

  it('should render the venue name in an h2', () => {
    expect(wrapper.find('h2').text()).toBe('Tattooed Moms')
  });

  it('should render the venue addressin a ul', () => {
    expect(wrapper.find('ul').text()).toContain('504 south st.Philadelphia, PA 19109')
  });
})
