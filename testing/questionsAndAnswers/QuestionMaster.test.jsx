import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import QuestionMaster from '../../client/src/components/questionsAndAnswers/QuestionMaster.jsx';

describe('<QuestionMaster />', () => {
  it('renders a div component', () => {
    const wrapper = shallow(<QuestionMaster />);
    expect(wrapper.find('#data')).not.toBeUndefined();
  });

  it('renders a search bar component', () => {
    const wrapper = shallow(<QuestionMaster />);
    expect(wrapper.find('#data')).not.toBeUndefined();
  });
});
