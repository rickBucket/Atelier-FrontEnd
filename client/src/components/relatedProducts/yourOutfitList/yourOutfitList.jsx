import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ListContainer from '../sharedStyledComponents/listContainer';
import CardContainer from '../sharedStyledComponents/cardContainer';
import RightButtonWrapper from '../sharedStyledComponents/rightButtonWrapper';
import LeftButtonWrapper from '../sharedStyledComponents/leftButtonWrapper';
import LeftButton from '../sharedStyledComponents/leftButton';
import RightButton from '../sharedStyledComponents/rightButton';
import YourOutfitCard from './yourOutfitCard';

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
      cardOverflow: false,
    };
    this.addOutfit = this.addOutfit.bind(this);
    this.deleteOutfit = this.deleteOutfit.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
    this.isOverflowing = this.isOverflowing.bind(this);
  }

  componentDidMount() {
    const { parentProductID } = this.props;
    if (parentProductID !== undefined) {
      axios.get(`/products/?product_id=${parentProductID}`)
        .then(({ data }) => {
          this.setState({
            parentProductInfo: data,
          });
        })
        .catch((error) => {
          console.log('Error getting product details in yourOutfit list', error);
        });

      axios.get(`/products/?product_id=${parentProductID}&flag=styles`)
        .then(({ data }) => {
          this.setState({
            parentProductStyles: data,
          });
        })
        .catch((error) => {
          console.log('Error getting product styles in yourOutfit List', error);
        });

      axios.get('/outfit')
        .then(({ data }) => {
          this.setState({
            outfits: data,
            outfitsLoaded: true,
          });
        })
        .catch((error) => {
          console.log('Error getting outfit info in yourOutfit List', error);
        });
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
      .catch((error) => {
        console.log('Error posting outfit to server', error);
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
      .catch((error) => {
        console.log('Error deleting outfit from server', error);
      })
    })
    // this.isOverflowing();
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
    if (carousel) {
      const bool = carousel.scrollWidth > carousel.clientWidth;
      this.setState({
        cardOverflow: bool,
        imagesToTheRight: bool
      })
    }
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
