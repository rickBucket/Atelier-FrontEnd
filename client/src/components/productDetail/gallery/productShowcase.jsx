/* eslint-disable */
import React from 'react';
import PrimaryImageView from './primaryImageView.jsx';
import styled from 'styled-components';

const Div = styled.div`
  border: 0px solid grey;
  border-radius: 12px;
  padding: 12px;
  margin: 12px;
  box-shadow: 3px 3px 8px grey;
`
const InvisDiv = styled.div`
  border-radius: 12px;
  padding: 5px;
  margin: 5px;
`
const Img = styled.img`
  border: 0px solid black;
  border-radius: 12px;
  margin: auto;
  max-height: 100px;
  max-width: 100px;
  cursor: pointer;
  box-shadow: 3px 3px 8px grey;
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
        <Div>
          {
            this.state.photos.map((photo) => {
              return <Img key={photo.url} src={photo.thumbnail_url} a=''></Img>
            })
          }
        </Div>
      </InvisDiv>
    );
  }
}

export default ProductShowcase;
