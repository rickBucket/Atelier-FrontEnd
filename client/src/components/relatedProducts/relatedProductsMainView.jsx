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
      <AllEncompassing>
        <div>
          Related Products
        </div>
        <ListWrapper>
          <RelatedProductsList productID={this.props.productID} relatedProducts={this.state.relatedProducts} />
        </ListWrapper>
        <div>
          Your Outfit
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
`;

// const LeftButton = styled.button`
//   position: absolute;
//   left: 2%;
//   top: 25%;
//   background: none;
//   border: none;
//   cursor: pointer;
//   z-index: 100;
//   font-size: 30px;
// `;

// const RightButton = styled.button`
//   position: absolute;
//   right: 2%;
//   top: 25%;
//   background: none;
//   border: none;
//   cursor: pointer;
//   z-index: 100;
//   font-size: 30px;
// `;

const ListWrapper = styled.div`
  margin: 10px;
  position: relative;
`;