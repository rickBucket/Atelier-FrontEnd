import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import SortOptions from '../../../client/src/components/ratingsAndReviews/sortOptions/sortOptions.jsx';

describe('<SortOptions />', () => {
  it('should render a div', () => {
    const wrapper = shallow(<SortOptions />);
    expect(wrapper.find('#data')).not.toBeUndefined();
  });
});