import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProductDescription from '../../../client/src/components/productDetail/information/productDescription.jsx';

describe('<ProductDescription />', () => {
  it('renders a div component', () => {
    const wrapper = shallow(<ProductDescription />);
    expect(wrapper.find('#data')).not.toBeUndefined();
  });
});
