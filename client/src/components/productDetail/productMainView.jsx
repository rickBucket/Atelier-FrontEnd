/* eslint-disable */
import React from 'react';
import ProductInfo from './information/productInfo.jsx';
import ProductDescription from './information/productDescription.jsx';
import ProductShowcase from './gallery/productShowcase.jsx';
import StyleSelector from './customization/styleSelector.jsx';
import Checkout from './checkout/checkout.jsx';

class ProductMainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: {}
    };
  }

  componentDidMount() {
    console.log("HELLO");
  }

  render() {
    return (
      <div>
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
