/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import RelatedProductsList from './relatedProductsList/relatedProductsList.jsx';

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
    carousel.scrollLeft -= 320;
    if (carousel.scrollLeft <= 100) {
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
    const scrollLeftMax = carousel.scrollWidth - carousel.clientWidth;
    carousel.scrollLeft += 320;
    if (carousel.scrollLeft >= scrollLeftMax - 312) {
      this.setState({
        imagesToTheRight: false,
      });
    }
  }

  // add condititonal rendering in case relatedProducts hasn't been defined yet
  render() {
    return (
      <div >
        <div>
          Related Products
        </div>
        {this.state.imagesToTheRight ? <button onClick={this.scrollRight}>
          Right
        </button> : null}
        <RelatedProductsList productID={this.props.productID} relatedProducts={this.state.relatedProducts}/>
        {this.state.imagesToTheLeft ? <button onClick={this.scrollLeft}>
          Left
        </button> : null}
      </div>

    )
  }
};

export default RelatedProductsMainView;