import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Answers from '../../client/src/components/questionsAndAnswers/Answers.jsx';
import dummyData from '../../client/src/components/questionsAndAnswers/dummyData.js';

describe('<Answers />', () => {
  it('renders a div component', () => {
    const wrapper = shallow(<Answers item={dummyData.results.answers} />);
    expect(wrapper.find('#data')).not.toBeUndefined();
  });
});