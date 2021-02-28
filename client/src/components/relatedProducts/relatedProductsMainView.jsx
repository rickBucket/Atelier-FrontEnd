/* eslint-disable */
import React from 'react';
import ProductList from './relatedProductsList/relatedProductsList.jsx';

class RelatedProductsMainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    // bind all functions here
  }

  render() {
    return (
      <div>
        <div> Hello from MainView! </div>
        <ProductList />
      </div>

    )
  }
}

export default RelatedProductsMainView;