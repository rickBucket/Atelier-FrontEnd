/* eslint-disable */

import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ListContainer from '../sharedStyledComponents/listContainer.js';
import CardContainer from '../sharedStyledComponents/cardContainer.js';
import AddOutfitWrapper from './styledComponents/AddOutfitWrapper.js';
import YourOutfitCard from './yourOutfitCard.jsx';

class YourOutfitList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parentProductStyles: '',
      parentProductInfo: '',
      outfits: [],
    }
    this.addOutfit = this.addOutfit.bind(this);
    this.deleteOutfit = this.deleteOutfit.bind(this);
  }

  componentDidMount() {
    axios.get(`/products/?product_id=${this.props.parentProductID}`)
    .then(({ data }) => {
      this.setState({
        parentProductInfo: data
      })
    })

    axios.get(`/products/?product_id=${this.props.parentProductID}&flag=styles`)
    .then(({ data })=> {
      this.setState({
        parentProductStyles: data
      })
    })
  }

  addOutfit() {
    // for now adding to outfit locally

    const newOutfitInfo = [{
      info: this.state.parentProductInfo,
      styles: this.state.parentProductStyles
    }]
    console.log(newOutfitInfo)
    this.setState({
      outfits: [... newOutfitInfo]
    })


    // eventually will need to send post to server
  }

  deleteOutfit(productID) {
    // for now removing outfit locally

    const indexOfProduct = this.state.outfits.findIndex((outfit)=> {
      return outfit.styles.product_id === productID
    })
    var arrayWithoutDeletedOutfit = [...this.state.outfits]
    arrayWithoutDeletedOutfit.splice(indexOfProduct, 1)
    this.setState({
      outfits: arrayWithoutDeletedOutfit
    })
    // eventually will need to send delete to server

  }

  render() {
    return (
      <ListContainer>
        <AddOutfitWrapper onClick={this.addOutfit}>
          + Add to Your Outfit
        </AddOutfitWrapper>
        {this.state.outfits.length ? <CardContainer>
          {this.state.outfits.map((outfit, i)=> {
             return <YourOutfitCard
              outfit={outfit}
              deleteOutfit={this.deleteOutfit}
              key={i} />
          })}
        </CardContainer> : null}

      </ListContainer>
    )
  }
}

export default YourOutfitList;




// flex-shrink: 0;
// flex-grow: 0;
// text-align: center;