/* eslint-disable */
import React from 'react';
import Selectors from './Selectors.jsx';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Checkout
        <Selectors />
      </div>
    );
  }
}

export default Checkout;
