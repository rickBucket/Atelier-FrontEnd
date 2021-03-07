/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import RelatedProductsList from './relatedProductsList/relatedProductsList.jsx';
import YourOutfitList from './yourOutfitList/yourOutfitList.jsx';

class RelatedProductsMainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: [],
      // imagesToTheLeft: false,
      // imagesToTheRight: true
    }
    // this.scrollRight = this.scrollRight.bind(this);
    // this.scrollLeft = this.scrollLeft.bind(this);
  }

  componentDidMount() {
    axios.get(`/products/?product_id=${this.props.productID}&flag=related`)
      .then(({data})=> {
        this.setState({
          relatedProducts: data
        })
      })
  }

  // add condititonal rendering in case relatedProducts hasn't been defined yet
  render() {
    return (
      <AllEncompassing id="AllEncompassing">
        <div>
          <h3>YOU MAY ALSO LIKE</h3>
        </div>
        <ListWrapper>
          <RelatedProductsList productID={this.props.productID} relatedProducts={this.state.relatedProducts} />
        </ListWrapper>
        <div>
          <h3>YOUR OUTFIT</h3>
        </div>
        <ListWrapper>
          <YourOutfitList parentProductID={this.props.productID}/>
        </ListWrapper>
      </AllEncompassing>
    )
  }
};

export default RelatedProductsMainView;

const AllEncompassing = styled.div`
  padding: 5px 40px 0px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px 15%;

`;

const ListWrapper = styled.div`
  margin: 10px 0px 0px;
  position: relative;
`;
