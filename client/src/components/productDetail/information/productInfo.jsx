/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  border: 0px solid grey;
  border-radius: 12px;
  padding: 16px;
  margin: 16px 12px 16px 12px;
  box-shadow: 3px 3px 8px grey;
  max-width: 540px;
`
const InvisDiv = styled.div`
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
        *Rating and Review Link Here*
        <h2>{this.props.category}</h2>
        <h1>{this.props.name}</h1>
        <h4>${this.props.price}</h4>
      </Div>
    );
  }
}

export default ProductInfo;
