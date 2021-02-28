import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Selectors from '../../../client/src/components/productDetail/checkout/selectors.jsx';

describe('<Selectors />', () => {
  it('renders a div component', () => {
    const wrapper = shallow(<Selectors />);
    expect(wrapper.find('#data')).not.toBeUndefined();
  });
});
