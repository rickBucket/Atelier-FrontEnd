/* eslint-disable */
import React from 'react';
import Selectors from './selectors.jsx';

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
