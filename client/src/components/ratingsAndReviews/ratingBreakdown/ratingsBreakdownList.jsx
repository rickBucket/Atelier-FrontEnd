import React from 'react';
import RatingsBreakdownListEntry from './ratingsBreakdownListEntry';

const gridLayout = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'minwidth(5, 1fr) 50px',
  margin: 'auto',
};

const RatingsBreakdownList = ({ metaData }) => (
  <div style={gridLayout}>
    {
      Object.keys(metaData.ratings)
        .sort((a, b) => b - a)
        .map((rating, index) => (
          <RatingsBreakdownListEntry
            rating={rating}
            ratings={metaData.ratings}
            totalRating={metaData.ratings[rating]}
            index={index}
          />
        ))
    }
  </div>
);

export default RatingsBreakdownList;
