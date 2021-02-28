import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/app.jsx';

// FOR COMMON / GENERAL TESTING (SHARED COMPONENTS??)

describe('<App />', () => {
  it('renders a div component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#data')).not.toBeUndefined();
    expect(wrapper.state().widget_id).toBe('0');

    wrapper.find('#clear').simulate('click', {target: {value: '1'}, preventDefault: ()=>{} });
    wrapper.find('#clear').simulate('click', {target: {value: '2'}, preventDefault: ()=>{} });
    wrapper.find('#clear').simulate('click', {target: {value: '3'}, preventDefault: ()=>{} });
    wrapper.find('#clear').simulate('click', {target: {value: '4'}, preventDefault: ()=>{} });
  });
});
