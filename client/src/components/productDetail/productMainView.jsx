/* eslint-disable */
import React from 'react';
import axios from 'axios';
import ProductInfo from './information/productInfo.jsx';
import ProductDescription from './information/productDescription.jsx';
import ProductShowcase from './gallery/productShowcase.jsx';
import StyleSelector from './customization/styleSelector.jsx';
import Checkout from './checkout/checkout.jsx';
import styled from 'styled-components';

const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  height: 25px;
  border: none;
  color: white;
  display: flex;
  text-align: center;
`

class ProductMainView extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      currentProduct: {}, // {} id name slogan description category default_price features[{feature, value}]
      styles: [], // style_id, name, original_price, sale_price, default?, photos[{thumbnail_url, url}], skus{#}
      loaded: 0
    };
  }

  componentDidMount() {
      axios.get(`/products/?product_id=${this.props.productID}`)
        .then(({data}) => {
          this.setState({
            currentProduct: data,
            loaded: this.state.loaded + 1
          });
        });
      axios.get(`/products/?product_id=${this.props.productID}&flag=styles`)
        .then(({data}) => {
          this.setState({
            styles: data.results,
            loaded: this.state.loaded + 1
          });
        });
  }

  render() {
    return (
      <div>
        <Button>Testing Styled Components</Button>
        {
          this.state.loaded === 2 &&
          <div>
            <ProductShowcase photos={this.state.styles[0].photos} />
            <ProductInfo />
            <StyleSelector styles={this.state.styles}/>
            <Checkout />
            <ProductDescription />
          </div>
        }
      </div>
    );
  }
}

export default ProductMainView;
