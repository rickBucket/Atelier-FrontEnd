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
      outfitsLoaded: false,
      imagesToTheRight: false,
      imagesToTheLeft: false,
      cardOverflow: false
    }
    this.addOutfit = this.addOutfit.bind(this);
    this.deleteOutfit = this.deleteOutfit.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
    this.isOverflowing = this.isOverflowing.bind(this);
  }

  componentDidMount() {
    if (this.props.parentProductID !== undefined) {
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

    this.isOverflowing();
  }

  addOutfit() {
    const outfitToAddID = this.state.parentProductStyles.product_id;
    let index;
    this.state.outfits.forEach((element, i) => {
      if (element.styles.product_id === outfitToAddID) {
        index = i;
      }
    })
    if (index >= 0) {
      console.log('Outfit already added')
    } else {
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
    this.isOverflowing();
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
    this.isOverflowing();
  }

  scrollLeft() {
    this.setState({
      imagesToTheRight: true
    })
    const carousel = document.getElementById('yourOutfit');
    const scrollLeftMax = carousel.scrollWidth - carousel.clientWidth;
    carousel.scrollLeft -= 316;
    if (carousel.scrollLeft <= 316) {
      this.setState({
        imagesToTheLeft: false,
      });
    }
  }

  scrollRight() {
    this.setState({
      imagesToTheLeft: true
    })
    const carousel = document.getElementById('yourOutfit');
    const amountLeftToScroll = carousel.scrollWidth - carousel.clientWidth;
    carousel.scrollLeft += 316;
    if (carousel.scrollLeft >= amountLeftToScroll - 316) {
      this.setState({
        imagesToTheRight: false,
      });
    }
  }

  isOverflowing() {
    const carousel = document.getElementById('yourOutfit');
    const bool = carousel.scrollWidth > carousel.clientWidth;
    this.setState({
      cardOverflow: bool,
      imagesToTheRight: bool
    })
  }

  render() {
    return (
      <>
        {this.state.imagesToTheRight ?
          <RightButtonWrapper>
            <RightButton onClick={this.scrollRight}>
              &#8250;
      </RightButton>
          </RightButtonWrapper> : null
        }
        <ListContainer id="yourOutfit">
          <CardContainer onClick={this.addOutfit} id="addOutfit">
            <AddOutfitContent>
              + Add To Your Outfit

          </AddOutfitContent>
            <BorderDiv></BorderDiv>
          </CardContainer>
          {this.state.outfitsLoaded ?

            <>
              {this.state.outfits.map((outfit, i) => {
                return <YourOutfitCard
                  outfit={outfit}
                  deleteOutfit={this.deleteOutfit}
                  key={i} />
              })}
            </>
            : null}
        </ListContainer>
        {this.state.imagesToTheLeft ? <LeftButtonWrapper>
          <LeftButton onClick={this.scrollLeft}>
            &#8249;
        </LeftButton>
        </LeftButtonWrapper> : null}
      </>
    )
  }
}

export default YourOutfitList;

const BorderDiv = styled.div`
border-bottom: 2px solid grey;
align: center;
width: 90%;
margin-top: -50px;
margin-left: 5%;
margin-right: 5%;
position: relative;
bottom: 0px;
`;

const AddOutfitContent = styled.div`
  min-height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255,255,255,0.1);
  &:hover {
    opacity: 0.8
  }
`;

const LeftButtonWrapper = styled.div`
  position: absolute;
  left: 1%;
  top: 0px;
  padding-left: 60px;
  height: 89%;
  border: none;
  cursor: pointer;
  z-index: 0;
  outline: 0;
`;

const RightButtonWrapper = styled.div`
  position: absolute;
  right: -1%;
  top: 0px;
  padding-left: 60px;
  height: 89%;
  border: none;
  cursor: pointer;
  z-index: 1;
  outline: 0;
`;

const LeftButton = styled.button`
  position: absolute;
  left: 2%;
  top: 25%;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
  z-index: 10;
  font-size: 40px;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const RightButton = styled.button`
  position: absolute;
  right: 2%;
  top: 25%;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
  z-index: 10;
  font-size: 40px;
  &:hover {
    background-color: black;
    color: white;
  }
`;