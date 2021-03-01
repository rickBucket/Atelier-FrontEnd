/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
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

  componentDidMount() {
    // Axios get request for related products array
    // Assign that array to state
      // For each id in that array send a get request to products/produc-id/styles & products/product-id
      // add the relevant info to the relatedProductsArray in state
      // this array will be passed down to children components
    axios.get(`/products/?product_id=${this.props.productID}&flag=related`)
      .then(({data})=> {
        console.log(data);
        this.setState({
          relatedProducts: data
        })
      })
  }

  render() {
    return (
      <div >
        <RelatedProductsList productID={this.props.productID} relatedProducts={this.state.relatedProducts}/>
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