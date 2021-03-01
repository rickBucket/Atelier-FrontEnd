/* eslint-disable */
import React from 'react';
import PrimaryImageView from './primaryImageView.jsx';
import ImageGallery from './imageGallery.jsx';

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
