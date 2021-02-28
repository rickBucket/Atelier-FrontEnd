/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import RelatedProductCard from './relatedProductCard.jsx';

const RelatedProductList = (props) => {
 return (
  <Div>
      {props.relatedProducts.map((product)=> {
        return <RelatedProductCard productID={product} key={product}/>
      })}
  </Div>
  )
}

const Div = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
`;

export default RelatedProductList;