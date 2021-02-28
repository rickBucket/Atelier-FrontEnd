/* eslint-disable */
import React from 'react';
import dummyData from '../dummyData.js';

class RelatedProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productIDInfo: dummyData[this.props.productID].productInfo,
      productIDStyles: dummyData[this.props.productID].styles,
      defaultStyle: ''
    }
    // bind functions here
  }

  componentDidMount() {
    var styles = this.state.productIDStyles.results;
    var defaultStyleInfo;
    for (var i = 0; i < styles.length; i++) {
      var currentStyle = styles[i];
      if (currentStyle["default?"] === true) {
        defaultStyleInfo = currentStyle;
      }
    }
    this.setState({defaultStyle: defaultStyleInfo})
  }

  render() {
    return (
      <div>
        <div></div>
        <div>{this.state.productIDInfo.category}</div>
        <div>{this.state.productIDInfo.name}</div>
        <div>{this.state.productIDInfo.default_price}</div>
      </div>
    )
  }
}

export default RelatedProductCard;