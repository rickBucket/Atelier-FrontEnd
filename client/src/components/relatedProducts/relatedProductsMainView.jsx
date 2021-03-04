/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import RelatedProductsList from './relatedProductsList/relatedProductsList.jsx';
import YourOutfitList from './yourOutfitList/yourOutfitList.jsx';

class RelatedProductsMainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: [],
      imagesToTheLeft: false,
      imagesToTheRight: true
    }
    this.scrollRight = this.scrollRight.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
  }

  componentDidMount() {
    axios.get(`/products/?product_id=${this.props.productID}&flag=related`)
      .then(({data})=> {
        this.setState({
          relatedProducts: data
        })
      })
  }

  scrollLeft() {
    this.setState({
      imagesToTheRight: true
    })
    const carousel = document.getElementById('productCarousel');
    carousel.scrollLeft -= 316;
    if (carousel.scrollLeft <= 50) {
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
    if (carousel.scrollLeft >= amountLeftToScroll) {
      this.setState({
        imagesToTheRight: false,
      });
    }
  }

  // add condititonal rendering in case relatedProducts hasn't been defined yet
  render() {
    return (
      <AllEncompassing>
        <div>
          Related Products
        </div>
        <ListWrapper>
          <div>
            {this.state.imagesToTheRight ? <RightButton onClick={this.scrollRight}>
            &#8250;
          </RightButton> : null}
          </div>
          <RelatedProductsList productID={this.props.productID} relatedProducts={this.state.relatedProducts} />
          <div>
            {this.state.imagesToTheLeft ? <LeftButton onClick={this.scrollLeft}>
            &#8249;
        </LeftButton> : null}
          </div>
        </ListWrapper>
        <div>
          Your Outfit
        </div>
        <ListWrapper>
        {/* <div>
            {this.state.imagesToTheRight ? <RightButton onClick={this.scrollRight}>
            Hello
          </RightButton> : null}
          </div> */}
          <YourOutfitList parentProductID={this.props.productID}/>
          {/* <div>
            {this.state.imagesToTheLeft ? <LeftButton onClick={this.scrollLeft}>
              ⬅️
        </LeftButton> : null}
          </div> */}
        </ListWrapper>
      </AllEncompassing>
    )
  }
};

export default RelatedProductsMainView;

const AllEncompassing = styled.div`
  padding: 5px 40px 0px 40px;
`;

const LeftButton = styled.button`
  position: absolute;
  left: 2%;
  top: 25%;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 100;
  font-size: 30px;
`;

const RightButton = styled.button`
  position: absolute;
  right: 2%;
  top: 25%;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 100;
  font-size: 30px;
`;

const ListWrapper = styled.div`
  margin: 10px;
`;