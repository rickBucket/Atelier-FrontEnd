/* eslint-disable */
import React from 'react';
import StyleOption from './styleOption.jsx';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        StyleSelector
        <StyleOption />
      </div>
    );
  }
}

export default StyleSelector;
