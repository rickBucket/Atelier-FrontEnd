/* eslint-disable */
import React from 'react';
import PrimaryImageView from './primaryImageView.jsx';
import styled from 'styled-components';

const Div = styled.div`
  border: 4px solid black;
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
`
const Img = styled.img`
  border: 4px solid black;
  border-radius: 20px;
  margin: 5px;
  max-height: 100px;
  max-width: 100px;
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
      <Div>
        ProductShowcase
        <PrimaryImageView photo={this.state.currentPhoto.url}/>
        {
          this.state.photos.map((photo) => {
            return <Img key={photo.url} src={photo.thumbnail_url} a=''></Img>
          })
        }
      </Div>
    );
  }
}

export default ProductShowcase;
