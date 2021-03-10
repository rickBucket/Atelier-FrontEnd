import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PhotoModal from '../../client/src/components/questionsAndAnswers/PhotoModal.jsx';

describe('<PhotoModal />', () => {
  it('renders a div component', () => {
    const wrapper = shallow(<PhotoModal />);
    expect(wrapper.find('#data')).not.toBeUndefined();
  });
});
