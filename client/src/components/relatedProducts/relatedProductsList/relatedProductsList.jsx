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

    }
  }

  componentDidMount() {
    axios.get(`/products/?product_id=${this.props.productID}`)
      .then(({ data }) => {
        this.setState({
          parentProductIDInfo: data
        })
      })
  }

  render() {
    if (this.state.parentProductIDInfo.length === 0) {
      return (
        null
      )
    } else {
      return (

          <ListContainer id="productCarousel">
            {this.props.relatedProducts.map((product) => {
              return <RelatedProductCard parentProductID={this.props.productID} productID={product}
                parentProductIDInfo={this.state.parentProductIDInfo}
                key={product} />
            })}
          </ListContainer>

      )
    }
  }
}

export default RelatedProductList;