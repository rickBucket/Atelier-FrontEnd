import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AnswerPhoto from '../../client/src/components/questionsAndAnswers/AnswerPhoto.jsx';

describe('<AnswerPhoto />', () => {
  it('renders a div component', () => {
    const wrapper = shallow(<AnswerPhoto />);
    expect(wrapper.find('#data')).not.toBeUndefined();
  });
});
