/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ComparisonModal from './comparisonModal';
import CardContainer from '../sharedStyledComponents/cardContainer';
import StarRating from '../../shared/starRating';

class RelatedProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productIDInfo: '',
      parentProductIDInfo: this.props.parentProductIDInfo,
      productIDStyles: '',
      featuredURL: '',
      loaded: 0,
      openCompareModal: false,
      combinedFeatures: '',
      salePrice: '',
      averageRating: '',
      metaData: '',
      averageRatingLoaded: false,
    };
    // bind functions here
    this.handleCompareClick = this.handleCompareClick.bind(this);
    this.combineFeatures = this.combineFeatures.bind(this);
    this.averageRating = this.averageRating.bind(this);
    this.changeProduct = this.changeProduct.bind(this);

    this.ImageWrapper = styled.div`
    height: 200px;
    width: auto;
    margin-bottom: 30px;
  `;
    this.Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
    object-position: 50% 0;
    z-index: 0;
  `;
  }

  componentDidMount() {
    const { productID, parentProductIDInfo } = this.props;
    axios.get(`/products/?product_id=${productID}`)
      .then(({ data }) => {
        this.setState({
          productIDInfo: data,
          parentProductFeatures: parentProductIDInfo.features,
          currentProductFeatures: data.features,
          loaded: this.state.loaded + 1,
        });
      })
      .catch((error) => {
        console.log('Error fetching product details in relatedProductCard', error);
      });
    axios.get(`/products/?product_id=${productID}&flag=styles`)
      .then(({ data }) => {
        const defaultProduct = data.results.find((product) => product['default?'] === true);
        let url;
        if (!defaultProduct) {
          url = data.results[0].photos[0].url;
          this.setState({
            salePrice: data.results[0].sale_price,
          });
        } else {
          url = defaultProduct.photos[0].url;
          this.setState({
            salePrice: defaultProduct.sale_price,
          });
        }
        if (!url) {
          this.setState({
            productIDStyles: data,
            loaded: this.state.loaded + 1,
            featuredURL: 'https://www.westernheights.k12.ok.us/wp-content/uploads/2020/01/No-Photo-Available.jpg',
          });
        } else {
          this.setState({
            productIDStyles: data,
            loaded: this.state.loaded + 1,
            featuredURL: url,
          });
        }
      })
      .catch((error) => {
        console.log('Error fetching product styles in relatedProductCard', error);
      });

    // get reviews
    axios.get(`/reviews/?product_id=${productID}&meta=meta`)
      .then((results) => {
        this.setState({
          metaData: results.data,
          averageRating: Number(this.averageRating(results.data.ratings)),
          averageRatingLoaded: true,
        });
      })
      .catch((err) => {
        console.log('error on meta GET request', err);
      });
  }

  averageRating(obj) {
    let wholeTotal = 0;
    let responseTotal = 0;
    for (const star in obj) {
      wholeTotal += (Number(obj[star]) * Number(star));
      responseTotal += Number(obj[star]);
    }
    const result = wholeTotal / responseTotal;
    if (isNaN((Math.round(result * 4) / 4).toFixed(1))) {
      return 0;
    }
    return result.toFixed(1);
  }

  changeProduct() {
    const { productID, updateProduct } = this.props;
    updateProduct(productID);
  }

  combineFeatures(parentProduct, currentProduct) {
    // goal is to get features into an array so we can map over it in comparisonModal

    const combinedFeatures = {};

    parentProduct.forEach((product) => {
      if (!combinedFeatures[product.feature]) {
        if (product.value === null) {
          combinedFeatures[product.feature] = ['✔️'];
        } else {
          combinedFeatures[product.feature] = [product.value];
        }
      }
    });

    currentProduct.forEach((product) => {
      if (!combinedFeatures[product.feature]) {
        if (product.value === null) {
          combinedFeatures[product.feature] = [];
          combinedFeatures[product.feature][1] = '✔️';
        } else {
          combinedFeatures[product.feature] = [];
          combinedFeatures[product.feature][1] = product.value;
        }
      } else if (product.value === null) {
        combinedFeatures[product.feature][1] = '✔️';
      } else {
        combinedFeatures[product.feature][1] = product.value;
      }
    });

    const arrayOfCombinedFeatures = [];
    const features = Object.keys(combinedFeatures);
    const values = Object.values(combinedFeatures);

    // eslint-disable-next-line no-plusplus
    for (let p = 0; p < features.length; p++) {
      arrayOfCombinedFeatures.push(values[p][0], features[p], values[p][1]);
    }

    this.setState({
      combinedFeatures: arrayOfCombinedFeatures,
    });
  }

  handleCompareClick() {
    const { openCompareModal, parentProductFeatures, currentProductFeatures } = this.state;
    this.setState({
      openCompareModal: !openCompareModal,
    });
    this.combineFeatures(parentProductFeatures, currentProductFeatures);
  }

  render() {
    const {
      salePrice,
      loaded,
      featuredURL,
      productIDInfo, averageRatingLoaded, averageRating, openCompareModal, parentProductIDInfo,
      combinedFeatures,
    } = this.state;
    const sale = {
      textDecoration: salePrice ? 'line-through' : 'none',
      color: salePrice ? 'red' : 'black',
      fontSize: '15px',
    };
    const loading = {
      backgroundImage: 'url("https://mk0wwwpoqcommervacts.kinstacdn.com/wp-content/uploads/2018/11/image3.gif")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
    };
    return (
      <div>
        {
          loaded < 2
          && <CardContainer style={loading} />
        }
        {
          loaded === 2
          && (
          <CardContainer>
            <ButtonWrapper>
              <CompareButton
                onClick={this.handleCompareClick}
                className={"fa fa-star-o"}
              >

              </CompareButton>
            </ButtonWrapper>

            <this.ImageWrapper onClick={this.changeProduct}>
              <this.Image src={featuredURL} />
            </this.ImageWrapper>

            <ProductContentWrapper style={{ fontSize: '12px' }}>{productIDInfo.category}</ProductContentWrapper>
            <ProductContentWrapper onClick={this.changeProduct} style={{ fontSize: '17px', fontWeight: 'bold' }}>{productIDInfo.name}</ProductContentWrapper>
            <ProductContentWrapper style={sale}>
              $
              {productIDInfo.default_price}
            </ProductContentWrapper>
            {salePrice ? <ProductContentWrapper style={{ fontSize: '15px' }}>{salePrice}</ProductContentWrapper> : null}
            <ProductContentWrapper>
              {averageRatingLoaded ? (
                <StarRating averageRating={averageRating} height={18} width={15} />) : null}
            </ProductContentWrapper>
            {salePrice ? <LowerBorderDiv /> : <BorderDiv />}
          </CardContainer>
          )
        }
        {
          openCompareModal
          && (
          <div>
            <ComparisonModal
              closeModal={this.handleCompareClick}
              parentProduct={parentProductIDInfo.name}
              compareProduct={productIDInfo.name}
              combinedFeatures={combinedFeatures}
            />
          </div>
          )
        }
      </div>
    );
  }
}

const BorderDiv = styled.div`
border-bottom: 2px solid grey;
align: center;
width: 90%;
margin-top: 72px;
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

const CompareButton = styled.button`
  postition: relative;
  cursor: pointer;
  border: none;
  background: none;
  font-size: 25px;
  color: black;
  &:hover {
    color: gold;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  margin-top: 5px;
  z-index: 10;
`;

const ProductContentWrapper = styled.div`
  margin: 5px 15px;
`;

export default RelatedProductCard;

{/* <img src="star2.png" style={{ height: '25px' }} alt="Compare Products" /> */}