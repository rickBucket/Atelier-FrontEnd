import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import ProductBreakdown from '../../../client/src/components/ratingsAndReviews/ProductBreakdown/ProductBreakdown.jsx';

describe('<ProductBreakdown />', () => {
  it('should render a div', () => {
    const wrapper = shallow(<ProductBreakdown />);
    expect(wrapper.find('#data')).not.toBeUndefined();
  });
});