/* eslint-disable */
import React from 'react';
import axios from 'axios';
import ProductInfo from './information/ProductInfo.jsx';
import ProductDescription from './information/ProductDescription.jsx';
import ProductShowcase from './gallery/ProductShowcase.jsx';
import StyleSelector from './customization/StyleSelector.jsx';
import Checkout from './checkout/Checkout.jsx';
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
    this.state = {
      currentProduct: {}
    };
  }

  componentDidMount() {
    axios.get('/products')
      .then(({data}) => {
        console.log(data);
      });
    console.log("HELLO");
  }

  render() {
    return (
      <div>
        <Button>Testing Styled Components</Button>
        ProductMainView
        <ProductShowcase />
        <ProductInfo />
        <StyleSelector />
        <Checkout />
        <ProductDescription />
      </div>
    );
  }
}

export default ProductMainView;
