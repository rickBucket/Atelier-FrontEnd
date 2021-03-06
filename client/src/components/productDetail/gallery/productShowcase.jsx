/* eslint-disable */
import React from 'react';
import PrimaryImageView from './primaryImageView.jsx';
import styled from 'styled-components';

const FlexDiv = styled.div`
  border: 1px solid lightgrey;
  margin: 64px 12px 12px -32px;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.5);
  overflow-x: hidden;
  width: 77px;
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
const Img = styled.img`
  margin: 6px;
  height: 64px;
  width: 64px;
  object-fit: cover;
  cursor: pointer;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.5);
  transition-duration: 0.2s;
  &:hover {
    margin: 4px;
    height: 68px;
    width: 69px;
  }
`
const Button = styled.div`
  border-radius: 50%;
  padding: 12px 14px 12px 14px;
  cursor: pointer;
  float: right;
  position: relative;
  z-index: 20;
  background: rgba(255,255,255,0.25);
  backdrop-filter: blur(8px) contrast(80%);
  &:hover {
    background: rgba(255,255,255,0.4);
  }
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
    console.log(this.state.photos);
    console.log(this.state.currentPhoto);
    this.setState({
      currentPhoto: this.state.photos[(this.state.photos.indexOf(this.state.currentPhoto) + flag + this.state.photos.length) % this.state.photos.length]
    });
  }

  render() {
    return (
      <div>
        <Button
          style={{margin: "84px 16px -64px -72px"}}
          className="fa fa-expand"
          onClick={this.handleExpand}
        />
        {
          this.state.currentPhoto.url !== this.state.photos[this.state.photos.length - 1].url &&
          <Button
            style={{margin: "276px 20px -64px -76px"}}
            onClick={this.nextPhoto.bind(this, 1)}
            className="fa fa-arrow-right"
          />
        } {
          this.state.currentPhoto.url !== this.state.photos[0].url &&
          <Button
            style={{margin: "276px 488px -64px -552px"}}
            onClick={this.nextPhoto.bind(this, -1)}
            className="fa fa-arrow-left"
          />
        }
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
      </div>
    );
  }
}

export default ProductShowcase;
