/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import CardContainer from '../sharedStyledComponents/cardContainer';

class YourOutfitCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productIDInfo: '',
      productIDStyles: '',
      featuredURL: '',
      loaded: 0,
      salePrice: '',
    };
    this.removeOutfit = this.removeOutfit.bind(this);
  }

  componentDidMount() {
    const { outfit } = this.props;
    const defaultProduct = outfit.styles.results.find((product) => product['default?'] === true);
    let url;
    if (!defaultProduct) {
      url = outfit.styles.results[0].photos[0].url;
      this.setState({
        salePrice: outfit.styles.results[0].sale_price,
      });
    } else {
      url = defaultProduct.photos[0].url;
      this.setState({
        salePrice: defaultProduct.sale_price,
      });
    }
    if (!url) {
      this.setState({
        productIDInfo: outfit.info,
        productIDStyles: outfit.styles,
        loaded: this.state.loaded + 1,
        featuredURL: 'https://www.westernheights.k12.ok.us/wp-content/uploads/2020/01/No-Photo-Available.jpg',
      });
    } else {
      this.setState({
        productIDInfo: outfit.info,
        productIDStyles: outfit.styles,
        loaded: this.state.loaded + 1,
        featuredURL: url,
      });
    }
  }

  removeOutfit() {
    const { deleteOutfit } = this.props;
    const { productIDStyles } = this.state;
    deleteOutfit(productIDStyles.product_id);
  }

  render() {
    const {
      salePrice, loaded, featuredURL, productIDInfo,
    } = this.state;
    const sale = {
      textDecoration: salePrice ? 'line-through' : 'none',
      color: salePrice ? 'red' : 'black',
    };
    return (
      <>
        {
          loaded < 1 && (
          <img src="https://www.bluechipexterminating.com/wp-content/uploads/2020/02/loading-gif-png-5.gif" width="300" alt="loadingGif" />
          )
        }
        {
          loaded === 1 && (
            <CardContainer>
              <ButtonWrapper>
                <DeleteButton
                  onClick={this.removeOutfit}
                  style={{ color: 'white' }}
                >
                  &#9747;
                </DeleteButton>
              </ButtonWrapper>

              <ImageWrapper>
                <Image src={featuredURL} width="100%" height="auto" />
              </ImageWrapper>

              <ProductContentWrapper style={{ fontSize: '12px' }}>{productIDInfo.category}</ProductContentWrapper>
              <ProductContentWrapper style={{ fontSize: '17px', fontWeight: 'bold' }}>{productIDInfo.name}</ProductContentWrapper>
              <ProductContentWrapper
                style={sale}
              >
                $
                {productIDInfo.default_price}
              </ProductContentWrapper>
              {salePrice ? <ProductContentWrapper style={{ fontSize: '15px' }}>{salePrice}</ProductContentWrapper> : null}
              {salePrice ? <LowerBorderDiv /> : <BorderDiv />}
            </CardContainer>
          )
        }
      </>
    );
  }
}

const BorderDiv = styled.div`
border-bottom: 2px solid grey;
align: center;
width: 90%;
margin-top: 102px;
margin-left: 5%;
margin-right: 5%;
position: relative;
bottom: 0px;
`;

const LowerBorderDiv = styled.div`
border-bottom: 2px solid grey;
align: center;
width: 90%;
margin-top: 47px;
margin-left: 5%;
margin-right: 5%;
position: relative;
bottom: 0px;
`;

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
