/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import RelatedProductsList from './relatedProductsList/relatedProductsList.jsx';

class RelatedProductsMainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: [],
    }
    // bind all functions here
  }

  componentDidMount() {
    axios.get(`/products/?product_id=${this.props.productID}&flag=related`)
      .then(({data})=> {
        console.log(data);
        this.setState({
          relatedProducts: data
        })
      })
  }

  // add condititonal rendering in case relatedProducts hasn't been defined yet
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