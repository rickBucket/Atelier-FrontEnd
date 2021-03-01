/* eslint-disable */
import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StyleOption from '../../../client/src/components/productDetail/customization/styleOption.jsx';

describe('<StyleOption />', () => {
  it('renders a div component', () => {
    const wrapper = shallow(<StyleOption />);
    expect(wrapper.find('#data')).not.toBeUndefined();
  });
});
