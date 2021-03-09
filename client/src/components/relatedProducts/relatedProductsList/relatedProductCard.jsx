/* eslint-disable */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ComparisonModal from './comparisonModal.jsx';
import CardContainer from '../sharedStyledComponents/cardContainer.js';
import StarRating from '../../shared/starRating.jsx';

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
      averageRatingLoaded: false
    }
    // bind functions here
    this.handleCompareClick = this.handleCompareClick.bind(this);
    this.combineFeatures = this.combineFeatures.bind(this);
    this.averageRating = this.averageRating.bind(this);

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
    axios.get(`/products/?product_id=${this.props.productID}`)
      .then(({ data })=> {
        this.setState({
          productIDInfo: data,
          parentProductFeatures: this.props.parentProductIDInfo.features,
          currentProductFeatures: data.features,
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
          this.setState({
            salePrice: data.results[0]["sale_price"]
          })
        } else {
          url = defaultProduct.photos[0].url;
          this.setState({
            salePrice: defaultProduct["sale_price"]
          })
        }
        if (!url) {
          this.setState({
            productIDStyles: data,
            loaded: this.state.loaded + 1,
            featuredURL: "https://www.westernheights.k12.ok.us/wp-content/uploads/2020/01/No-Photo-Available.jpg",
          })
        } else {
          this.setState({
            productIDStyles: data,
            loaded: this.state.loaded + 1,
            featuredURL: url
          })
        }
      })

    // get reviews
    axios.get(`/reviews/?product_id=${this.props.productID}&meta=meta`)
    .then((results) => {
      this.setState({
        metaData: results.data,
        averageRating: Number(this.averageRating(results.data.ratings)),
        averageRatingLoaded: true
      })
    })
    .catch((err) => {
      console.log('error on meta GET request', err)
    })

  }

  averageRating(obj){
    var wholeTotal = 0;
    var responseTotal = 0;
    for (var star in obj) {
      wholeTotal += (Number(obj[star]) * Number(star))
      responseTotal += Number(obj[star])
    }
    var result = wholeTotal / responseTotal;
    if (isNaN((Math.round(result * 4) / 4).toFixed(1))) {
      return 0
    } else {
      return result.toFixed(1);
    }
  }

  combineFeatures (parentProduct, currentProduct) {
    // goal is to get features into an array so we can map over it in comparisonModal

    const combinedFeatures = {};

    parentProduct.forEach((product)=>{
      if(!combinedFeatures[product.feature]) {
        if (product.value === null) {
          combinedFeatures[product.feature] = ['✔️'];
        } else {
          combinedFeatures[product.feature] = [product.value]
        }
      }
    })

    currentProduct.forEach((product)=> {
      if (!combinedFeatures[product.feature]) {
        if (product.value === null) {
          combinedFeatures[product.feature] = [];
          combinedFeatures[product.feature][1] = '✔️';
        } else {
          combinedFeatures[product.feature] = [];
          combinedFeatures[product.feature][1] = product.value;
        }
      } else {
        if (product.value === null) {
          combinedFeatures[product.feature][1] = '✔️'
        } else {
          combinedFeatures[product.feature][1] = product.value;
        }
      }
    })

    const arrayOfCombinedFeatures = [];
    const features = Object.keys(combinedFeatures);
    const values = Object.values(combinedFeatures);

    for (let p = 0; p < features.length; p++) {
      arrayOfCombinedFeatures.push(values[p][0], features[p], values[p][1]);
    }

    this.setState({
      combinedFeatures: arrayOfCombinedFeatures
    })
  };

  handleCompareClick(event) {
    this.setState({
      openCompareModal: !this.state.openCompareModal
    })
    this.combineFeatures(this.state.parentProductFeatures, this.state.currentProductFeatures)
  }

  render() {
    var sale = {
      textDecoration: this.state.salePrice ? 'line-through' : 'none',
      color: this.state.salePrice ? 'red' : 'black',
      fontSize: '15px'
    }
    var loading = {
      backgroundImage: 'url("https://mk0wwwpoqcommervacts.kinstacdn.com/wp-content/uploads/2018/11/image3.gif")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain'
    }
    return (
      <div>
        {
          this.state.loaded < 2 &&
          <CardContainer style={loading}>
          </CardContainer>
        }
        {
          this.state.loaded === 2 &&
          <CardContainer >
              <ButtonWrapper>
              <CompareButton
                onClick={this.handleCompareClick}
              >&#9734;</CompareButton>
              </ButtonWrapper>

            <this.ImageWrapper>
              <this.Image src={this.state.featuredURL} ></this.Image>
            </this.ImageWrapper>

            <ProductContentWrapper style={{fontSize: '12px'}}>{this.state.productIDInfo.category}</ProductContentWrapper>
            <ProductContentWrapper style={{fontSize: '17px', fontWeight: 'bold'}}>{this.state.productIDInfo.name}</ProductContentWrapper>
            <ProductContentWrapper style={sale}>${this.state.productIDInfo.default_price}</ProductContentWrapper>
            {this.state.salePrice ? <ProductContentWrapper style={{fontSize: '15px'}}>{this.state.salePrice}</ProductContentWrapper> : null}
            <ProductContentWrapper>
            {this.state.averageRatingLoaded ? <StarRating averageRating={this.state.averageRating} height={18} width={15}/> : null}
            </ProductContentWrapper>
            {this.state.salePrice ? <LowerSaleDiv></LowerSaleDiv> : <LowerDiv></LowerDiv>}
          </CardContainer>
        }
        {
          this.state.openCompareModal &&
          <div>
              <ComparisonModal
            closeModal={this.handleCompareClick}
            parentProduct={this.state.parentProductIDInfo.name}
            compareProduct={this.state.productIDInfo.name}
            combinedFeatures={this.state.combinedFeatures}
            />
          </div>
        }
      </div>
    );
  }
}

const LowerDiv = styled.div`
border-bottom: 2px solid grey;
align: center;
width: 90%;
margin-top: 72px;
margin-left: 5%;
margin-right: 5%;
position: relative;
bottom: 0px;
`;

const LowerSaleDiv = styled.div`
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
  right: 20%;
  top: 2%;
  cursor: pointer;
  border: none;
  background: none;
  font-size: 25px;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  z-index: 10;
`;

const ProductContentWrapper = styled.div`
  margin: 5px 15px;
`;

export default RelatedProductCard;
