/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import dummyData from '../dummyData.js';

class RelatedProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productIDInfo: dummyData[this.props.productID].productInfo,
      productIDStyles: dummyData[this.props.productID].styles,
      featuredURL: ''
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
    if (defaultStyleInfo === undefined) {
      defaultStyleInfo = styles[0];
    }
    var url = defaultStyleInfo.photos[0].thumbnail_url;
    console.log(url);
    if (url === null) {
      this.setState({featuredURL: "https://previews.123rf.com/images/urfandadashov/urfandadashov1809/urfandadashov180901275/109135379-photo-not-available-vector-icon-isolated-on-transparent-background-photo-not-available-logo-concept.jpg"})
    } else {
      this.setState({featuredURL: url})
    }

  }

  render() {
    return (
      <FlexboxItem>
        <img src={this.state.featuredURL} width="300"></img>
        <div>{this.state.productIDInfo.category}</div>
        <div>{this.state.productIDInfo.name}</div>
        <div>{this.state.productIDInfo.default_price}</div>
      </FlexboxItem>
    )
  }
}

//styled-components
const FlexboxItem = styled.div`
  width: 300px;
  height: 500px;
  margin: 2px;
  border: 3px solid #333;
  background-color: grey;
`;

export default RelatedProductCard;