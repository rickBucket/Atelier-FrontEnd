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
      imagesToTheLeft: true
    })
    const carousel = document.getElementById('productCarousel');
    carousel.scrollLeft -= 320;
  }

  scrollRight() {
    this.setState({
      imagesToTheRight: true
    })
    const carousel = document.getElementById('productCarousel');
    carousel.scrollLeft += 320;
  }

  // add condititonal rendering in case relatedProducts hasn't been defined yet
  render() {
    return (
      <div >
        <button onClick={this.scrollRight}>
          Right
        </button>
        <RelatedProductsList productID={this.props.productID} relatedProducts={this.state.relatedProducts}/>
        <button onClick={this.scrollLeft}>
          Left
        </button>
      </div>

    )
  }
};

export default RelatedProductsMainView;