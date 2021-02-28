/* eslint-disable */
import React from 'react';
import ListEntry from './listEntry.jsx';

const ProductList = (props) => {
 return (
  <div>
      <div> Hello from relatedProductsList! </div>
      <ul className="relatedProductList">
        <ListEntry />
      </ul>
  </div>
  )
}

export default ProductList;