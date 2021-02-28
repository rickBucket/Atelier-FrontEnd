/* eslint-disable */

import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RelatedProductsMainView from '../../client/src/components/relatedProducts/relatedProductsMainView.jsx';

describe('<relatedProductsMainView />', () => {
  it('renders a div component', () => {
    const wrapper = shallow(<RelatedProductsMainView />);
    expect(wrapper.find('#data')).not.toBeUndefined();
  });
});