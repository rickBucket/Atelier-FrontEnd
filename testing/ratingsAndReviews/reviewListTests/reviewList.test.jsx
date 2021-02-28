import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import ReviewList from '../../../client/src/components/ratingsAndReviews/reviewList/reviewList.jsx';
import ratingsDummy from '../../../client/src/components/ratingsAndReviews/ratingsDummy.jsx'

describe('<ReviewList />', () => {
  it('should render a div', () => {
    const wrapper = shallow(<ReviewList reviewList={ratingsDummy}/>);
    expect(wrapper.find('#data')).not.toBeUndefined();
  });
});