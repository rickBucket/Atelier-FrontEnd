/* eslint-disable */

import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ListContainer from '../sharedStyledComponents/listContainer.js';
import CardContainer from '../sharedStyledComponents/cardContainer.js';
import YourOutfitCard from './yourOutfitCard.jsx';

class YourOutfitList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parentProductStyles: '',
      parentProductInfo: '',
      outfits: [],
      outfitsLoaded: false
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

    axios.get('/outfit')
      .then(({ data }) => {
        this.setState({
          outfits: data,
          outfitsLoaded: true
        })
      })
  }

  addOutfit() {
    // for now adding to outfit locally

    const newOutfitInfoArray = [{
      info: this.state.parentProductInfo,
      styles: this.state.parentProductStyles
    }]
    const newOutfitInfoObj = newOutfitInfoArray[0];

    // eventually will need to send post to server
    axios.post('/outfit', newOutfitInfoObj)
    .then(({ data }) => {
      console.log('this is data after adding an outfit', data)
      this.setState({
        outfits: data,
        outfitsLoaded: true
      })
    })

  }

  deleteOutfit(productID) {
    // for now removing outfit locally

    // const indexOfProduct = this.state.outfits.findIndex((outfit)=> {
    //   return outfit.styles.product_id === productID
    // })
    // var arrayWithoutDeletedOutfit = [...this.state.outfits]
    // arrayWithoutDeletedOutfit.splice(indexOfProduct, 1)
    // this.setState({
    //   outfits: arrayWithoutDeletedOutfit
    // })
    // eventually will need to send delete to server
    const outfitToDelete = {
      ID: productID
    }
    axios.delete('/outfit', outfitToDelete)
      .then(({ data }) => {
        data.length > 0 ?
        this.setState({
          outfits: data
        })
        : this.setState({
          outfits: data,
          outfitsLoaded: false
        })
      })
  }

  render() {

    return (
      <ListContainer>
        <CardContainer onClick={this.addOutfit}>
          <AddOutfitContent>
            + Add To Your Outfit
          </AddOutfitContent>
        </CardContainer>
        {this.state.outfitsLoaded ?

          <>
          {this.state.outfits.map((outfit, i)=> {
            console.log('Im being remapped')
             return <YourOutfitCard
              outfit={outfit}
              deleteOutfit={this.deleteOutfit}
              key={i} />
          })}
        </>
         : null}
      </ListContainer>
    )
  }
}

export default YourOutfitList;

const AddOutfitContent = styled.div`
  min-height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255,255,255,0.1);
`;