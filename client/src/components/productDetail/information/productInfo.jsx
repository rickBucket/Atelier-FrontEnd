/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  border: 4px solid black;
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
`

// needs: rating, review link, category, name. price
class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Div>
        ProductInfo
        <Div>{this.props.category}</Div>
        <Div>{this.props.name}</Div>
        <Div>${this.props.price}</Div>
      </Div>
    );
  }
}

export default ProductInfo;
