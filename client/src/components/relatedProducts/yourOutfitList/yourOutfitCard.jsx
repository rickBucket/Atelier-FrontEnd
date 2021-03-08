/* eslint-disable */

import React from 'react';
import styled from 'styled-components';
import CardContainer from '../sharedStyledComponents/cardContainer.js';

class YourOutfitCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productIDInfo: '',
      productIDStyles: '',
      featuredURL: '',
      loaded: 0,
      salePrice: ''
    }
    this.removeOutfit = this.removeOutfit.bind(this);
  }

  componentDidMount() {
    const defaultProduct = this.props.outfit.styles.results.find((product)=> {
      return product["default?"] === true
    })
    if (!defaultProduct) {
      var url = this.props.outfit.styles.results[0].photos[0].url;
      this.setState({
        salePrice: this.props.outfit.styles.results[0]["sale_price"]
      })
    } else {
      url = defaultProduct.photos[0].url;
      this.setState({
        salePrice: defaultProduct["sale_price"]
      })
    }
    if (!url) {
      this.setState({
        productIDInfo: this.props.outfit.info,
        productIDStyles: this.props.outfit.styles,
        loaded: this.state.loaded + 1,
        featuredURL: "https://www.westernheights.k12.ok.us/wp-content/uploads/2020/01/No-Photo-Available.jpg",
      })
    } else {
      this.setState({
        productIDInfo: this.props.outfit.info,
        productIDStyles: this.props.outfit.styles,
        loaded: this.state.loaded + 1,
        featuredURL: url
      })
    }
  }

  removeOutfit(event) {
    this.props.deleteOutfit(this.state.productIDStyles.product_id);
  }

  render() {
    var sale = {
      textDecoration: this.state.salePrice ? 'line-through' : 'none',
      color: this.state.salePrice ? 'red' : 'black'
    }
    return (
      <div>
        {
          this.state.loaded < 1 &&
          <img src="https://www.bluechipexterminating.com/wp-content/uploads/2020/02/loading-gif-png-5.gif" width="300"></img>
        }
        {
          this.state.loaded === 1 &&
          <div>
              <ButtonWrapper>
              <DeleteButton
                onClick={this.removeOutfit} style={{fontColor: 'white'}}
              >&#9747;</DeleteButton>
              </ButtonWrapper>

            <ImageWrapper>
              <Image src={this.state.featuredURL} width="100%" height="auto"></Image>
            </ImageWrapper>

            <ProductContentWrapper>{this.state.productIDInfo.category}</ProductContentWrapper>
            <ProductContentWrapper>{this.state.productIDInfo.name}</ProductContentWrapper>
            <ProductContentWrapper style={sale}>${this.state.productIDInfo.default_price}</ProductContentWrapper>
            {this.state.salePrice ? <ProductContentWrapper>{this.state.salePrice}</ProductContentWrapper> : null}
          </div>
        }
      </div>
    );
  }
}

const ImageWrapper = styled.div`
height: 200px;
width: auto;
margin-bottom: 30px;
`;

const Image = styled.img`
height: 100%;
width: 100%;
object-fit: contain;
z-index: 0;
`;

// const ButtonWrapper = styled.div`
//   position: absolute;
// `;

const DeleteButton = styled.button`
  right: 20%;
  top: 2%;
  cursor: pointer;
  border: none;
  background: none;
  font-size: 20px;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  z-index: 1;
`;

const ProductContentWrapper = styled.div`
  margin: 3px 3px 3px 5px;
`;

export default YourOutfitCard;


