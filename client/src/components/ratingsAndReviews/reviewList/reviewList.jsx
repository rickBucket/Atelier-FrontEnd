import React from 'react';
import ReviewListEntry from './reviewListEntry.jsx'

const reviewList = (props) => {
  var reviewList = props.reviewList.results
  return(
    <div>
      Review List Component
      <ul style={{
        display: 'grid',
        padding: '10px',
        justifyContent: 'space-evenly'
      }}>
      {reviewList.slice(0, 2).map((review, key) => (
      <ReviewListEntry review={review} key={key}/>
      ))}
      </ul>
      </div>
  )
}

export default reviewList