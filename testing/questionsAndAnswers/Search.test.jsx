import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from '../../client/src/components/questionsAndAnswers/Search.jsx';

describe('<Search />', () => {
  it('renders a div component', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.find('#data')).not.toBeUndefined();
  });
});