import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import QuestionMaster from '../../client/src/components/questionsAndAnswers/QuestionMaster';
import Question from '../../client/src/components/questionsAndAnswers/Question';

describe('<QuestionMaster />', () => {
  it('renders a div component', () => {
    const wrapper = shallow(<QuestionMaster item={{ question: [] }} />);
    expect(wrapper.find('#data')).not.toBeUndefined();
  });

  // it('renders children when passed in', () => {
  //   const wrapper = shallow((
  //     <QuestionMaster>
  //       <Question />
  //     </QuestionMaster>
  //   ));
  //   expect(wrapper.contains(<div />)).to.equal(true);
  // });
});
