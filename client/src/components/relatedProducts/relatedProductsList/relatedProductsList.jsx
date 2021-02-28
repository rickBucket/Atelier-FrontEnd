/* eslint-disable */
import React from 'react';
import RelatedProductCard from './relatedProductCard.jsx';

const RelatedProductList = (props) => {
 return (
  <div>
      <div> Hello from relatedProductsList! </div>
      <ul className="relatedProductList">
        <RelatedProductCard />
      </ul>
  </div>
  )
}

export default RelatedProductList;