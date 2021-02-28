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
    return(
      <div className="reviewsGridContainer" style={{
        display: 'grid',
        borderStyle: 'solid',
        borderColor: 'red',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(5, 1fr)',
        gridGap: '30px',
        justifyContent: 'center space-between',
        alignContent: 'center',
        width: '100vw',
        height: '100vh'
      }}>

        <div className="ratingBreakdownGridBox" style={{
          borderStyle: 'solid',
          borderColor: 'yellow',
          gridColumn: '1',
          gridRow: '1/3',
        }}>
        <RatingBreakdown />
        </div>

        <div className="productBreakdownGridBox" style={{
          borderStyle: 'solid',
          borderColor: 'orange',
          gridColumn: '1',
          gridRow: '3/5',
        }}>
        <ProductBreakdown />
        </div>

        <div className="sortOptionsBreakdownGridBox" style={{
          borderStyle: 'solid',
          borderColor: 'teal',
          gridColumn: '2',
        }}>
        <SortOptions />
        </div>

        <div className="reviewListGridBox" style={{
          borderStyle: 'solid',
          borderColor: 'purple',
          gridColumn: '2/4',
          gridRow: '2/10',
        }}>
        <ReviewList reviewList={this.state.reviewList}/>
        </div>

        <div className="writeReviewGridBox" style={{
          borderStyle: 'solid',
          borderColor: 'green',
          gridColumn: '2/3',
        }}>
        <WriteReview className="writeReviewGridBox"/>
        </div>
      </div>
    )
  }
}

export default RatingsApp

/* General grid for Reviews and ratings

.reviewsGridContainer {
  display: grid;
  border-style: solid;
  border-color: red;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 30px;
  justify-content: center space-between;
  align-content: center;
  width: 100vw;
  height: 100vh;
}

.reviewListGridBox {
  border-style: solid;
  border-color: purple;
  grid-column: 2/4;
  grid-row: 2/10;
}

.writeReviewGridBox {
  border-style: solid;
  border-color: green;
  grid-column: 2/3;
}

.ratingBreakdownGridBox {
  border-style: solid;
  border-color: yellow;
  grid-column: 1;
  grid-row: 1/3;
}

.productBreakdownGridBox {
  border-style: solid;
  border-color: orange;
  grid-column: 1;
  grid-row: 3/5;
}

.sortOptionsBreakdownGridBox {
  border-style: solid;
  border-color: teal;
  grid-column: 2;
} */