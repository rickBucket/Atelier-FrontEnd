import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Question from '../../client/src/components/questionsAndAnswers/Question.jsx';
import dummyData from '../../client/src/components/questionsAndAnswers/dummyData.js';

describe('<Question />', () => {
  it('renders a div component', () => {
    const wrapper = shallow(<Question item={dummyData.results} />);
    expect(wrapper.find('#data')).not.toBeUndefined();
  });
});
