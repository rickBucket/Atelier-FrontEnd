import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import QuestionModal from '../../client/src/components/questionsAndAnswers/QuestionModal.jsx';

describe('<QuestionModal />', () => {
  it('renders a div component', () => {
    const wrapper = shallow(<QuestionModal />);
    expect(wrapper.find('#data')).not.toBeUndefined();
  });
});

//how would i perfectly cover this component test wise 
// fully deployed
//search bar done by friday at 12
