import SelectField from '../../src/components/SelectField';
import { mount } from "enzyme"
import React from "react"
import jasmineEnzyme from "jasmine-enzyme"

describe('SelectField', () => {
  let wrapper;

  beforeEach(()=>{
    wrapper = mount(
      <SelectField
        name='electric'
        type='text'
        value='electric'
        options={['test','test2']}
      />
    );
  });

  it('should render a select tag ', () => {
      expect(wrapper.find('select')).toBePresent();
  });

  it('should render a option tag ', () => {
      expect(wrapper.find('option')).toBePresent();
  });


});
