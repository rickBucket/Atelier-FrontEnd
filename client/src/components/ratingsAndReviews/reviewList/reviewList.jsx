import React from 'react';
import ReviewListEntry from './reviewListEntry';

const gridLayout = {
  display: 'grid',
  padding: '10px',
  alignItems: 'center',
};

const reviewList = ({
  reviewList, reviewEnd, handlePut, starSort,
}) => {
  console.log(starSort);

  return (
  <div>
    <ul style={gridLayout}>
      {reviewList.slice(0, reviewEnd)
        .map((review, key) => {
          if (starSort.length > 0) {
            return starSort.map((star) => {
              if (Number(star) === review.rating) {
               return <ReviewListEntry review={review} key={key} handlePut={handlePut} />;
              }
            });
          } else {
            return <ReviewListEntry review={review} key={key} handlePut={handlePut} />;
          }
        })}
    </ul>
  </div>
  )
};

export default reviewList;
