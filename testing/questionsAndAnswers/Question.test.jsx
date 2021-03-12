import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Question from '../../client/src/components/questionsAndAnswers/Question';

describe('<QuestionMaster />', () => {
  it('renders a div component', () => {
    const wrapper = shallow(<Question item={{answers: [] }} />);
    expect(wrapper.find('#data')).not.toBeUndefined();
  });
});
