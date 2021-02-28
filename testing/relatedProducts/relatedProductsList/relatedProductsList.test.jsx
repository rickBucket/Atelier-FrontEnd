/* eslint-disable */

import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RelatedProductsList from '../../../client/src/components/relatedProducts/relatedProductsList/relatedProductsList.jsx';

describe('<RelatedProductsList />', () => {
  it('renders a div component', () => {
    const wrapper = shallow(<RelatedProductsList />);
    expect(wrapper.find('#data')).not.toBeUndefined();
  });
});