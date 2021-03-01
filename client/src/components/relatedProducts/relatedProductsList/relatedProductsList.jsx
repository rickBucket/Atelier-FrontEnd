/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import RelatedProductCard from './relatedProductCard.jsx';

const RelatedProductList = (props) => {
 return (
  <Div>
      {props.relatedProducts.map((product)=> {
        return <RelatedProductCard parentProductID={props.productID} productID={product} key={product}/>
      })}
  </Div>
  )
}

const Div = styled.div`
display: flex;
justify-content: space-around;
align-content: center;
`;

export default RelatedProductList;