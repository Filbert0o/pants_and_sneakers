import ReviewFormContainer from '../../src/containers/ReviewFormContainer';

describe('ReviewFormContainer', () => {
  let wrapper;

  beforeEach( () => {
    jasmineEnzyme();
    wrapper = mount(
      <ReviewFormContainer
        params = {{ venue_id: 1 }}
      />
    );
  });

  it('should render the review form with a form tag', () => {
    expect(wrapper.find('form')).toBePresent();
  });

  it('should have a field with label rating', () => {
    expect(wrapper.find('select')).toBePresent();
    expect(wrapper.find('select').props().name).toEqual('rating');
  });

  it('should have 6 options for select field', () => {
    expect(wrapper.find('option').nodes.length).toEqual(6);
    expect(wrapper.find('option').nodes[0].text).toContain('Choose Rating*');
    expect(wrapper.find('option').nodes[0].value).toEqual('');

    expect(wrapper.find('option').nodes[1].text).toContain('1');
    expect(wrapper.find('option').nodes[1].value).toEqual('1');

    expect(wrapper.find('option').nodes[2].text).toContain('2');
    expect(wrapper.find('option').nodes[2].value).toEqual('2');

    expect(wrapper.find('option').nodes[3].text).toContain('3');
    expect(wrapper.find('option').nodes[3].value).toEqual('3');

    expect(wrapper.find('option').nodes[4].text).toContain('4');
    expect(wrapper.find('option').nodes[4].value).toEqual('4');

    expect(wrapper.find('option').nodes[5].text).toContain('5');
    expect(wrapper.find('option').nodes[5].value).toEqual('5');
  });

  it('should have a field with label review', () => {
    expect(wrapper.find('label').nodes[1].innerHTML).toContain('Review');
    expect(wrapper.find('input')).toBePresent();
    expect(wrapper.find('input').nodes[0].name).toEqual('review_text');
  });

  it('should have a submit button', () => {
    expect(wrapper.find("input[type='submit']")).toBePresent();
    expect(wrapper.find("input[type='submit']").nodes[0].value).toEqual('Submit');
  });

  it('have an errors div', () => {
    expect(wrapper.find('#errors')).toBePresent()
  });
});
