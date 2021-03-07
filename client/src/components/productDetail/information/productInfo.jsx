/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import StarRating from '../../shared/starRating.jsx';

const Div = styled.div`
  border: 1px solid grey;
  padding: 16px 32px 16px 32px;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.5);
  margin: 48px 12px 16px 12px;
  max-width: 540px;
  background: rgba(255,255,255,0.1);
`

// needs: rating, review link, category, name. price
class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Div>
        <h5 style={{float: "right", "margin-top": "4px"}}>Review Link Here</h5>
        <StarRating averageRating={4.5} height={21} width={18} />
        <h3>{this.props.category}</h3>
        <h1>{this.props.name}</h1>
        <h4>${this.props.price}</h4>
      </Div>
    );
  }
}

export default ProductInfo;
