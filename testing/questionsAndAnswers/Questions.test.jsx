import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Questions from '../../client/src/components/questionsAndAnswers/Questions.jsx';
import dummyData from '../../client/src/components/questionsAndAnswers/dummyData.js';

describe('<Questions />', () => {
  it('renders a div component', () => {
    const wrapper = shallow(<Questions questionData={this.state.questionData} />);
    expect(wrapper.find('#data')).not.toBeUndefined();
  });
});
