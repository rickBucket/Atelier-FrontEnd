import React from 'react';
import ReviewListEntry from './reviewListEntry.jsx'

const reviewList = (props) => {
  var reviewList = props.reviewList.results
  return(
    <div>
      Review List Component
      <ul>
      {reviewList.map((review, key) => (
      <ReviewListEntry review={review} key={key}/>
      ))}
      </ul>
      </div>
  )
}

export default reviewList