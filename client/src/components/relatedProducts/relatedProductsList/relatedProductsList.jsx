/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import RelatedProductCard from './relatedProductCard.jsx';
import ListContainer from '../sharedStyledComponents/listContainer.js';

class RelatedProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: this.props.relatedProducts,
      parentProductIDInfo: '',
      imagesToTheLeft: false,
      imagesToTheRight: true,
      cardOverflow: false,
    }
    this.scrollRight = this.scrollRight.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
    this.isOverflowing = this.isOverflowing.bind(this);
  }

  componentDidMount() {
    axios.get(`/products/?product_id=${this.props.productID}`)
      .then(({ data }) => {
        this.setState({
          parentProductIDInfo: data
        })
      })
  }

  scrollLeft() {
    this.setState({
      imagesToTheRight: true
    })
    const carousel = document.getElementById('productCarousel');
    const scrollLeftMax = carousel.scrollWidth - carousel.clientWidth;
    carousel.scrollLeft -= 316;
    if (carousel.scrollLeft <= 316) {
      this.setState({
        imagesToTheLeft: false,
      });
    }
  }

  scrollRight() {
    this.setState({
      imagesToTheLeft: true
    })
    const carousel = document.getElementById('productCarousel');
    const amountLeftToScroll = carousel.scrollWidth - carousel.clientWidth;
    carousel.scrollLeft += 316;
    if (carousel.scrollLeft >= amountLeftToScroll - 316) {
      this.setState({
        imagesToTheRight: false,
      });
    }
  }

  isOverflowing() {
    const carousel = document.getElementById('productCarousel');
    const bool = carousel.scrollHeight > carousel.clientHeight || carousel.scrollWidth > carousel.clientWidth;
    this.setState({
      cardOverflow: bool,
      imagesToTheRight: bool
    })
  }

  render() {
    if (this.state.parentProductIDInfo.length === 0) {
      return (
        null
      )
    } else {
      return (
        <div>
          {this.state.imagesToTheRight ?
            <RightButtonWrapper>
              <RightButton onClick={this.scrollRight}>
                &#8250;
          </RightButton>
          </RightButtonWrapper> : null
        }
          <ListContainer id="productCarousel" onLoad={this.isOverflowing}>
            {this.props.relatedProducts.map((product) => {
              return <RelatedProductCard parentProductID={this.props.productID} productID={product}
                parentProductIDInfo={this.state.parentProductIDInfo}
                key={product} />
            })}
          </ListContainer>
            {this.state.imagesToTheLeft ? <LeftButtonWrapper>
              <LeftButton onClick={this.scrollLeft}>
              &#8249;
        </LeftButton>
        </LeftButtonWrapper>: null}
        </div>

      )
    }
  }
}

export default RelatedProductList;

const LeftButtonWrapper = styled.div`
  position: absolute;
  left: 1%;
  top: 0px;
  padding-left: 60px;
  height: 89%;
  border: none;
  cursor: pointer;
  z-index: 0;
  outline: 0;
`;

const RightButtonWrapper = styled.div`
  position: absolute;
  right: -1%;
  top: 0px;
  padding-left: 60px;
  height: 89%;
  border: none;
  cursor: pointer;
  z-index: 1;
  outline: 0;
`;

const LeftButton = styled.button`
  position: absolute;
  left: 2%;
  top: 25%;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
  z-index: 10;
  font-size: 40px;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const RightButton = styled.button`
  position: absolute;
  right: 2%;
  top: 25%;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
  z-index: 10;
  font-size: 40px;
  &:hover {
    background-color: black;
    color: white;
  }
`;

// const OutsideDiv = styled.div`
//   display: flex;
//   max-width: 1000px;
//   justify-content: center;
// `;