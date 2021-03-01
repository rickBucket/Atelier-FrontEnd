/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import RelatedProductsList from './relatedProductsList/relatedProductsList.jsx';
import dummyData from './dummyData.js';

class RelatedProductsMainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: dummyData.related
    }
    // bind all functions here
  }

  // componentDidMount() {
  //   // Axios get request for related products array
  //   // Assign that array to state
  //     // For each id in that array send a get request to products/produc-id/styles & products/product-id
  //     // add the relevant info to the relatedProductsArray in state
  //     // this array will be passed down to children components
  // }

  render() {
    return (
      <div >
        <RelatedProductsList relatedProducts={this.state.relatedProducts}/>
      </div>

    )
  }
};

  // Testing Styled-Components
  // const Div = styled.div`
  //   display: flex;
  //   flex-direction: row;
  //   justify-content: space-around;
  // `;

export default RelatedProductsMainView;