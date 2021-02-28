import React from 'react';
import ratingsDummy from './ratingsDummy.jsx';
import metaDummy from './metaDummy.jsx';
import ReviewList from './reviewList/reviewList.jsx';
import WriteReview from './writeReview/writeReview.jsx';
import RatingBreakdown from './ratingBreakdown/ratingBreakdown.jsx';
import ProductBreakdown from './productBreakdown/productBreakdown.jsx';
import SortOptions from './sortOptions/sortOptions.jsx';

class RatingsApp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      reviewList : ratingsDummy
    }
  }

  componentDidMount() {
    // this.setState({
    //   reviewList: ratingsDummy.results
    // })
  }

  render() {
    console.log(ratingsDummy.results)
    return(
      <div>
        <SortOptions />
        <ReviewList reviewList={this.state.reviewList}/>
        <WriteReview />
        <RatingBreakdown />
        <ProductBreakdown />
      </div>
    )
  }
}

export default RatingsApp