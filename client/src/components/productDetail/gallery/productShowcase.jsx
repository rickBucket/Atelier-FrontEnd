/* eslint-disable */
import React from 'react';
import PrimaryImageView from './primaryImageView.jsx';
import styled from 'styled-components';

const FlexDiv = styled.div`
  border: 0px solid grey;
  border-radius: 12px;
  padding: auto;
  margin: 12px 12px 12px -25px;
  box-shadow: 3px 3px 8px rgba(0,0,0,0.5);
  overflow-x: hidden;
  width: 116px;
  height: 560px;
  display: flex;
  flex-wrap: wrap;
  float: left;
  position: absolute;
  z-index: 10;
  backdrop-filter: blur(12px);
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* IE 10+ */
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* Chrome/Safari/Webkit */
  }
`
const InvisDiv = styled.div`
  border-radius: 12px;
  padding: 5px;
  margin: 5px;
`
const Img = styled.img`
  border: 0px solid black;
  border-radius: 12px;
  margin: 8px;
  height: 100px;
  width: 100px;
  object-fit: cover;
  cursor: pointer;
  box-shadow: 3px 3px 8px rgba(0,0,0,0.5);
`

class ProductShowcase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: this.props.photos,
      currentPhoto: this.props.photos[0]
    };
  }

  render() {
    return (
      <InvisDiv>
        <PrimaryImageView photo={this.state.currentPhoto.url}/>
        <FlexDiv>
          {
            this.state.photos.map((photo) => {
              return <Img key={photo.url} src={photo.thumbnail_url} a=''></Img>
            })
          }
        </FlexDiv>
      </InvisDiv>
    );
  }
}

export default ProductShowcase;
