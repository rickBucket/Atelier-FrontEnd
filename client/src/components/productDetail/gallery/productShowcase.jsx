/* eslint-disable */
import React from 'react';
import PrimaryImageView from './PrimaryImageView.jsx';
import ImageGallery from './ImageGallery.jsx';

class ProductShowcase extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        ProductShowcase
        <PrimaryImageView />
        <ImageGallery />
      </div>
    );
  }
}

export default ProductShowcase;
