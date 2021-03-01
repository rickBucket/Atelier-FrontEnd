/* eslint-disable */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import dummyData from '../dummyData.js';

class RelatedProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productIDInfo: '',
      productIDStyles: '',
      featuredURL: '',
      loaded: false
    }
    // bind functions here
    this.FlexboxItem = styled.div`
    width: 300px;
    height: 500px;
    margin: 2px;
    border: 3px solid #333;
    background-color: grey;
  `;
  }

  componentDidMount() {
    axios.get(`/products/?product_id=${this.props.productID}&flag=styles`)
    .then(({ data }) => {
      const styledata = data;
      axios.get(`/products/?product_id=${this.props.productID}`)
        .then(({ data }) => {
          var styles = styledata.results;
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
          if (url === null) {
            this.setState({ productIDInfo: data, productIDStyles: styledata, featuredURL: "https://www.westernheights.k12.ok.us/wp-content/uploads/2020/01/No-Photo-Available.jpg", loaded: true })
          } else {
            this.setState({ productIDInfo: data, productIDStyles: styledata, featuredURL: url, loaded: true })
          }
        })
    })
  }

  render() {
    return (
      <div>
        {
          this.state.loaded === true &&
          <this.FlexboxItem>
            <img src={this.state.featuredURL} width="300"></img>
            <div>{this.state.productIDInfo.category}</div>
            <div>{this.state.productIDInfo.name}</div>
            <div>{this.state.productIDInfo.default_price}</div>
          </this.FlexboxItem>
        }
      </div>
    );
  }
}

export default RelatedProductCard;
