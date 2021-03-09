import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AnswerModal from '../../client/src/components/questionsAndAnswers/AnswerModal.jsx';

describe('<AnswerModal />', () => {
  it('renders a div component', () => {
    const wrapper = shallow(<AnswerModal />);
    expect(wrapper.find('#data')).not.toBeUndefined();
  });
});
