import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import WriteReview from '../../../client/src/components/ratingsAndReviews/writeReview/writeReview.jsx';


describe('<WriteReview />', () => {
  it('should render a div', () => {
    const wrapper = shallow(<WriteReview />);
    expect(wrapper.find('#data')).not.toBeUndefined();
  });
});