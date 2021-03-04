import React from 'react';
import ReviewListEntry from './reviewListEntry.jsx'

const gridLayout = {
  display: 'grid',
  padding: '10px',
  gridGap: '20px',
  alignItems: 'center'
};

const reviewList = ({ reviewList, reviewEnd, handlePut}) => {
  return(
    <div>
      Review List Component
      <ul style={gridLayout}>
      {reviewList.slice(0, reviewEnd).map((review, key) => (
      <ReviewListEntry review={review} key={key} handlePut={handlePut}/>
      ))}
      </ul>
      </div>
  )
}

export default reviewList