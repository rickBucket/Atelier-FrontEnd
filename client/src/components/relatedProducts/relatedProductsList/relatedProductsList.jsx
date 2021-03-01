/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import RelatedProductCard from './relatedProductCard.jsx';

class RelatedProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      farLeftImageIndex: 0,
      relatedProducts: this.props.relatedProducts,
    }
  }

  render() {
    return (
      <div>
        <RelatedListContainer id="productCarousel">
          {this.props.relatedProducts.map((product) => {
            return <RelatedProductCard parentProductID={this.props.productID} productID={product} key={product} />
          })}
        </RelatedListContainer>
        </div>
    )
  }
}

const RelatedListContainer = styled.div`
display: flex;
justify-content: flex-start;
overflow: hidden;
position: relative;
`;
const ButtonStyle = styled.div`
position: absolute,
right: 2%
top: 45%
cursor: pointer
`;

export default RelatedProductList;