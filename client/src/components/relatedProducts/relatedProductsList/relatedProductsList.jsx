/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import RelatedProductCard from './relatedProductCard.jsx';

class RelatedProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      farLeftImageIndex: 0
    }
  }

  render() {
    return (
      <Div>
        {this.props.relatedProducts.map((product) => {
          return <RelatedProductCard parentProductID={this.props.productID} productID={product} key={product} />
        })}
      </Div>
    )
  }
}

const Div = styled.div`
display: flex;
justify-content: space-around;
`;

export default RelatedProductList;