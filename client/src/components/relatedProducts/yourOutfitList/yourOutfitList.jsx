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
    const newOutfitInfoArray = [{
      info: this.state.parentProductInfo,
      styles: this.state.parentProductStyles
    }]
    const newOutfitInfoObj = newOutfitInfoArray[0];

    this.setState({
      outfits: []
    })
    axios.post('/outfit', newOutfitInfoObj)
    .then(({ data }) => {
      this.setState({
        outfits: data,
        outfitsLoaded: true
      })
    })

  }

  deleteOutfit(productID) {
    const outfitToDelete = {
      ID: productID
    }
    this.setState({
      outfits:[],
    }, () => {
      axios.delete('/outfit', { data: outfitToDelete})
      .then(({ data }) => {
        if (data.length > 0) {
          this.setState({
            outfits: data
          })
        } else {
          this.setState({
            outfits: data,
            loaded: false
          })
        }
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