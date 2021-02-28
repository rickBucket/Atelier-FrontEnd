import React from 'react';
import ratingsDummy from './ratingsDummy.jsx';
import metaDummy from './metaDummy.jsx';
import ReviewList from './reviewList/reviewList.jsx'


class RatingsApp extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <div>
        <ReviewList />
      </div>
    )
  }
}

export default RatingsApp