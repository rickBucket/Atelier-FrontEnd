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
      currentProduct: {}, // {} id name slogan description category default_price features[{feature, value}]
      styles: [] // style_id, name, original_price, sale_price, default?, photos[{thumbnail_url, url}], skus{#}
    };
  }

  componentDidMount() {
    axios.get('/products/?count=1')
      .then(({data}) => {
        axios.get(`/products/?product_id=${data[0].id}`)
          .then(({data}) => {
            this.setState({
              currentProduct: data
            });
          });
        axios.get(`/products/?product_id=${data[0].id}&flag=styles`)
          .then(({data}) => {
            this.setState({
              styles: data.results
            });
          });
      });
  }

  render() {
    return (
      <div>
        <Button>Testing Styled Components</Button>
        {
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
