import React from 'react';
import ReviewListEntry from './reviewListEntry.jsx'

const reviewList = (props) => {
console.log(props.reviewList)
  return(
    <div>
      Review List Component
      <ul>
      {props.reviewList.map((review, key) => (
      <ReviewListEntry review={review} key={key}/>
      ))}
      </ul>
      </div>
  )
}

export default reviewList