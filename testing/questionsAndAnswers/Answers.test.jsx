import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Answers from '../../client/src/components/questionsAndAnswers/Answers.jsx';

describe('<Answers />', () => {
  it('renders a div component', () => {
    const wrapper = shallow(<Answers item={dummy.Data.results.answers} />);
    expect(wrapper.find('#data')).not.toBeUndefined();
  });
});