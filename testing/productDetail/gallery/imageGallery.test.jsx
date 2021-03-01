/* eslint-disable */
import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ImageGallery from '../../../client/src/components/productDetail/gallery/imageGallery.jsx';

describe('<ImageGallery />', () => {
  it('renders a div component', () => {
    const wrapper = shallow(<ImageGallery />);
    expect(wrapper.find('#data')).not.toBeUndefined();
  });
});
