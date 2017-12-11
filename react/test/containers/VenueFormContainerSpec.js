import VenueFormContainer from '../../src/containers/VenueFormContainer';

describe('VenueFormContainer', () =>{
  let wrapper;

  beforeEach(()=>{
    wrapper = mount(
      <VenueFormContainer />
    );
  });

  it('should render a label tags with the appropriate attributes', () => {
    expect(wrapper.find('label').at(0).text()).toBe('Venue Name*');
    expect(wrapper.find('label').at(1).text()).toBe('Street Address*');
    expect(wrapper.find('label').at(2).text()).toBe('City*');
    expect(wrapper.find('label').at(3).text()).toBe('State*Choose State*AKALARASAZCACOCTDCDEFLGAGUHIIAIDILINKSKYLAMAMDMEMIMNMOMSMTNCNDNENHNJNMNVNYOHOKORPAPRRISCSDTNTXUTVAVIVTWAWIWVWY');
    expect(wrapper.find('label').at(4).text()).toBe('Zip*');
    expect(wrapper.find('label').at(5).text()).toBe('Venue Website');
    expect(wrapper.find('label').at(6).text()).toBe('Age RestrictionChoose Age RestrictionAll Ages18+21+');
    expect(wrapper.find('label').at(7).text()).toBe('Food OptionsChoose Food OptionsNoneLimited MenuFull Menu');
    expect(wrapper.find('label').at(8).text()).toBe('ParkingChoose ParkingHas Parking LotNo Parking Lot');
    expect(wrapper.find('label').at(9).text()).toBe('Business Hours');
    expect(wrapper.find('label').at(10).text()).toBe('Venue Phone');
    expect(wrapper.find('label').at(11).text()).toBe('Dress Code');
    expect(wrapper.find('label').at(12).text()).toBe('Cover ChargeChoose Cover ChargeYESNODepends');
    expect(wrapper.find('label').at(13).text()).toBe('Cash OnlyChoose Cash OnlyNOYES');
    expect(wrapper.find('label').at(14).text()).toBe('Venue Cover Photo');
  });

  it('should render inputs with the appropriate attributes for input', () => {
    expect(wrapper.find('input').at(0)).toBePresent();
    expect(wrapper.find('input').at(0).props()).toEqual({
      name: 'name',
      type: 'text',
      value: '',
      onChange: jasmine.any(Function)
    });

    expect(wrapper.find('input').at(1)).toBePresent();
    expect(wrapper.find('input').at(1).props()).toEqual({
      name: 'address',
      type: 'text',
      value: '',
      onChange: jasmine.any(Function)
    });

    expect(wrapper.find('input').at(2)).toBePresent();
    expect(wrapper.find('input').at(2).props()).toEqual({
      name: 'city',
      type: 'text',
      value: '',
      onChange: jasmine.any(Function)
    });

    expect(wrapper.find('input').at(3)).toBePresent();
    expect(wrapper.find('input').at(3).props()).toEqual({
      name: 'zip',
      type: 'text',
      value: '',
      onChange: jasmine.any(Function)
    });

    expect(wrapper.find('input').at(4)).toBePresent();
    expect(wrapper.find('input').at(4).props()).toEqual({
      name: 'website',
      type: 'text',
      value: '',
      onChange: jasmine.any(Function)
    });

    expect(wrapper.find('input').at(5)).toBePresent();
    expect(wrapper.find('input').at(5).props()).toEqual({
      name: 'hours',
      type: 'text',
      value: '',
      onChange: jasmine.any(Function)
    });

    expect(wrapper.find('input').at(6)).toBePresent();
    expect(wrapper.find('input').at(6).props()).toEqual({
      name: 'phone',
      type: 'text',
      value: '',
      onChange: jasmine.any(Function)
    });

    expect(wrapper.find('input').at(7)).toBePresent();
    expect(wrapper.find('input').at(7).props()).toEqual({
      name: 'dressCode',
      type: 'text',
      value: '',
      onChange: jasmine.any(Function)
    });

    expect(wrapper.find('input').at(8)).toBePresent();
    expect(wrapper.find('input').at(8).props()).toEqual({
      name: 'imageUrl',
      type: 'text',
      value: '',
      onChange: jasmine.any(Function)
    });
  });

  it('should render select', () => {
    expect(wrapper.find('select').at(0)).toBePresent();
    // expect(wrapper.find('select').at(0).props()).toEqual({
    //   name: 'state',
    //   value: '',
    //   onChange: jasmine.any(Function)
    // });
    expect(wrapper.find('select').at(1)).toBePresent();
    expect(wrapper.find('select').at(2)).toBePresent();
    expect(wrapper.find('select').at(3)).toBePresent();
    expect(wrapper.find('select').at(4)).toBePresent();
    expect(wrapper.find('select').at(5)).toBePresent();
  });


  it('should render Submit' , () => {
    expect(wrapper.find('input').at(9)).toBePresent();
    expect(wrapper.find('input').at(9).props()).toEqual({
      className: 'button',
      type: 'submit',
      value: 'Submit'
    });
  });


});
