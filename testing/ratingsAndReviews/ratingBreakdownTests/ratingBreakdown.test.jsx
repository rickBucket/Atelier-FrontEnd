import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import RatingBreakdown from '../../../client/src/components/ratingsAndReviews/ratingBreakdown/ratingBreakdown.jsx';

describe('<RatingBreakdown />', () => {
  it('should render a div', () => {
    const wrapper = shallow(<RatingBreakdown />);
    expect(wrapper.find('#data')).not.toBeUndefined();
  });
});