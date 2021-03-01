/* eslint-disable */
import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StyleSelector from '../../../client/src/components/productDetail/customization/styleSelector.jsx';

describe('<StyleSelector />', () => {
  it('renders a div component', () => {
    const wrapper = shallow(<StyleSelector />);
    expect(wrapper.find('#data')).not.toBeUndefined();
  });
});
