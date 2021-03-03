import React from 'react';
import ReviewListEntry from './reviewListEntry.jsx'

const reviewList = ({ reviewList }) => {
  return(
    <div>
      Review List Component
      <ul style={{
        display: 'grid',
        padding: '10px',
        gridGap: '20px',
        alignItems: 'center'
      }}>
      {reviewList.results.map((review, key) => (
      <ReviewListEntry review={review} key={key}/>
      ))}
      </ul>
      </div>
  )
}

export default reviewList