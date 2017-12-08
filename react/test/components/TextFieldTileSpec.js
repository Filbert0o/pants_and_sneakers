import TextField from '../../src/components/TextField';
import { mount } from "enzyme"
import React from "react"
import jasmineEnzyme from "jasmine-enzyme"

describe('TextField', () => {
  let wrapper;

  beforeEach(()=>{
    wrapper = mount(
      <TextField
        name='electric'
        type='text'
        value='electric'
      />
    );
  });

  it('should render an input tag', () => {
      expect(wrapper.find('input')).toBePresent();
  });


});
