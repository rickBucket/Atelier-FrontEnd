/* eslint-disable */
import React from 'react';
import axios from 'axios';
import ProductInfo from './information/productInfo.jsx';
import ProductDescription from './information/productDescription.jsx';
import ProductShowcase from './gallery/productShowcase.jsx';
import StyleSelector from './customization/styleSelector.jsx';
import Checkout from './checkout/checkout.jsx';
import ExpandedView from './gallery/expandedView.jsx';
import styled from 'styled-components';

const Div = styled.div`
  border: 1px solid grey;
  margin: 12px;
  padding: 2px;
  min-width: 400px;
  font-family: Arial;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.5);
`
const InvisDiv = styled.div`
  padding: 0px;
  margin: 4px;
  min-width: 400px;
  font-family: Arial;
`
const FlexDiv = styled.div`
  padding: 5px;
  margin: 5px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-family: Arial;
`

class ProductMainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: {}, // {} id name slogan description category default_price features[{feature, value}]
      styles: [], // style_id, name, original_price, sale_price, default?, photos[{thumbnail_url, url}], skus{#}
      selectedStyle: {},
      selectedPhoto: '',
      loaded: 0
    };
    this.changeStyle = this.changeStyle.bind(this);
    this.selectPhoto = this.selectPhoto.bind(this);
    this.unselectPhoto = this.unselectPhoto.bind(this);
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
            loaded: this.state.loaded + 1,
            selectedStyle: data.results.find((element) => {
              return element["default?"] === true;
            }) || data.results[0]
          });
        });
  }

  changeStyle(id) {
    this.setState({
      selectedStyle: this.state.styles.find((element) => {
        return element.style_id === id;
      })
    });
  }

  selectPhoto(photo) {
    this.setState({
      selectedPhoto: photo
    });
  }

  unselectPhoto() {
    this.setState({
      selectedPhoto: ''
    });
  }

  render() {
    return (
      <div>
        {
          this.state.loaded === 2 &&
          <InvisDiv>
            {
              this.state.selectedPhoto &&
              <ExpandedView
                key={this.state.selectedStyle.style_id}
                photo={this.state.selectedPhoto}
                unselectPhoto={this.unselectPhoto}
              />
            }
            <FlexDiv>
              <ProductShowcase
                key={this.state.selectedStyle.style_id}
                photos={this.state.selectedStyle.photos}
                selectPhoto={this.selectPhoto}
              />
              <InvisDiv>
                <ProductInfo
                  name={this.state.currentProduct.name}
                  category={this.state.currentProduct.category}
                  price={this.state.currentProduct.default_price}
                />
                <Div>
                  <StyleSelector
                    styles={this.state.styles}
                    changeStyle={this.changeStyle}
                    selectedStyle={this.state.selectedStyle}
                  />
                  <Checkout
                    key={this.state.selectedStyle.style_id}
                    skus={this.state.selectedStyle.skus}
                  />
                </Div>
              </InvisDiv>
            </FlexDiv>
            <ProductDescription
              slogan={this.state.currentProduct.slogan}
              description={this.state.currentProduct.description}
              features={this.state.currentProduct.features}
            />
          </InvisDiv>
        }
      </div>
    );
  }
}

export default ProductMainView;
