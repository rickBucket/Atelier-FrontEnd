/* eslint-disable */
import React from 'react';
import PrimaryImageView from './primaryImageView.jsx';
import styled from 'styled-components';

const FlexDiv = styled.div`
  border: 0px solid grey;
  border-radius: 12px;
  padding: auto;
  margin: 12px 12px 12px -48px;
  box-shadow: 3px 3px 8px rgba(0,0,0,0.5);
  overflow-x: hidden;
  width: 101px;
  height: 540px;
  display: flex;
  flex-wrap: wrap;
  float: left;
  position: absolute;
  z-index: 10;
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(16px);
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
  height: 85px;
  width: 85px;
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
    this.handleClick = this.handleClick.bind(this);
    this.handleExpand = this.handleExpand.bind(this);
  }

  handleClick(value) {
    this.setState({
      currentPhoto: this.state.photos.find((element) => element.url === value)
    });
  }

  handleExpand() {
    this.props.selectPhoto(this.state.currentPhoto.url);
  }

  render() {
    return (
      <InvisDiv>
        <PrimaryImageView
          handleExpand={this.handleExpand}
          photo={this.state.currentPhoto.url}
        />
        <FlexDiv>
          {
            this.state.photos.map((photo) => {
              return <Img key={photo.url} onClick={this.handleClick.bind(this, photo.url)} src={photo.thumbnail_url} a=''></Img>
            })
          }
        </FlexDiv>
      </InvisDiv>
    );
  }
}

export default ProductShowcase;
