/* eslint-disable */

import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RelatedProductCard from '../../../client/src/components/relatedProducts/relatedProductsList/relatedProductCard.jsx';

describe('<RelatedProductCard />', () => {
  it('renders a div component', () => {
    const wrapper = shallow(<RelatedProductCard />);
    expect(wrapper.find('#data')).not.toBeUndefined();
  });
});