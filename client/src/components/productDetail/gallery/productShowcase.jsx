/* eslint-disable */
import React from 'react';
import PrimaryImageView from './primaryImageView.jsx';
import styled from 'styled-components';

const FlexDiv = styled.div`
  border: 1px solid grey;
  margin: 64px 12px 12px -32px;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.5);
  overflow-x: hidden;
  width: 78px;
  height: 480px;
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
  border: 1px solid grey;
  border-radius: 2px;
  margin: 6px;
  height: 64px;
  width: 64px;
  object-fit: cover;
  cursor: pointer;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.5);
`
const ExpandButton = styled.div`
  border-radius: 50%;
  margin: 84px 16px -64px -72px;
  padding: 12px 14px 12px 14px;
  cursor: pointer;
  float: right;
  position: relative;
  z-index: 20;
  background: rgba(255,255,255,0.25);
  backdrop-filter: blur(8px) contrast(80%);
`
const RightButton = styled.div`
  border-radius: 50%;
  margin: 276px 16px -64px -72px;
  padding: 12px 14px 12px 14px;
  cursor: pointer;
  float: right;
  position: relative;
  z-index: 20;
  background: rgba(255,255,255,0.25);
  backdrop-filter: blur(8px) contrast(80%);
`
const LeftButton = styled.div`
  border-radius: 50%;
  margin: 276px 470px -64px -548px;
  padding: 12px 14px 12px 14px;
  cursor: pointer;
  float: right;
  position: relative;
  z-index: 20;
  background: rgba(255,255,255,0.25);
  backdrop-filter: blur(8px) contrast(80%);
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

  nextPhoto(flag) {
    this.setState({
      currentPhoto: this.state.photos[(this.state.photos.indexOf(this.state.currentPhoto) + flag + this.state.photos.length) % this.state.photos.length]
    });
  }

  render() {
    return (
      <InvisDiv>
        <ExpandButton
          className="fa fa-expand"
          onClick={this.handleExpand}
        />
        <RightButton onClick={this.nextPhoto.bind(this, 1)}
          className="fa fa-arrow-right"
        />
        <LeftButton onClick={this.nextPhoto.bind(this, -1)}
          className="fa fa-arrow-left"
        />
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
