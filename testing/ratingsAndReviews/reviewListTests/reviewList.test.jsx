import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import ReviewList from '../../../client/src/components/ratingsAndReviews/reviewList/reviewList.jsx';

describe('<ReviewList />', () => {
  it('should render a div', () => {
    const wrapper = shallow(<ReviewList />);
    expect(wrapper.find('#data')).not.toBeUndefined();
  });
});