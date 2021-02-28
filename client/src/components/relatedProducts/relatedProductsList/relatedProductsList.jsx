/* eslint-disable */
import React from 'react';
import RelatedProductCard from './relatedProductCard.jsx';

const RelatedProductList = (props) => {
 return (
  <div>
      {props.relatedProducts.map((product)=> {
        return <RelatedProductCard productID={product} key={product}/>
      })}
  </div>
  )
}

export default RelatedProductList;