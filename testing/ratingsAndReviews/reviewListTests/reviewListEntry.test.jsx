import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import ReviewListEntry from '../../../client/src/components/ratingsAndReviews/reviewList/reviewListEntry.jsx';

describe('<ReviewListEntry />', () => {
  it('should render a div', () => {
    const wrapper = shallow(<ReviewListEntry />);
    expect(wrapper.find('#data')).not.toBeUndefined();
  });
});