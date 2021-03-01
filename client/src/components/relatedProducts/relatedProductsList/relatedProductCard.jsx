/* eslint-disable */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

class RelatedProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productIDInfo: '',
      productIDStyles: '',
      featuredURL: '',
      loaded: 0,
      compare: false,
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
    axios.get(`/products/?product_id=${this.props.productID}`)
      .then(({ data })=> {
        this.setState({
          productIDInfo: data,
          loaded: this.state.loaded + 1
        })
      })
    axios.get(`/products/?product_id=${this.props.productID}&flag=styles`)
      .then(({ data })=> {
        const defaultProduct = data.results.find((product)=> {
          return product["default?"] === true
        })
        if (!defaultProduct) {
          var url = data.results[0].photos[0].url;
        } else {
          url = defaultProduct.photos[0].url;
        }
        if (!url) {
          this.setState({
            productIDStyles: data,
            loaded: this.state.loaded + 1,
            featuredURL: "https://www.westernheights.k12.ok.us/wp-content/uploads/2020/01/No-Photo-Available.jpg"
          })
        } else {
          this.setState({
            productIDStyles: data,
            loaded: this.state.loaded + 1,
            featuredURL: url
          })
        }
      })
  }

  render() {
    var imageStyle = {

    }
    return (
      <div>
        {
          this.state.loaded < 2 &&
          <img src="https://i.gifer.com/7gQj.gif" width="150"></img>
        }
        {
          this.state.loaded === 2 &&
          <this.FlexboxItem>
            <img src={this.state.featuredURL} width="100%"></img>
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
