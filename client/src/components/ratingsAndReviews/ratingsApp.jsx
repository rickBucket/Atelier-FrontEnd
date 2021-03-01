import React from 'react';
import axios from 'axios';
import ReviewList from './reviewList/reviewList.jsx';
import WriteReview from './writeReview/writeReview.jsx';
import RatingBreakdown from './ratingBreakdown/ratingBreakdown.jsx';
import ProductBreakdown from './productBreakdown/productBreakdown.jsx';
import SortOptions from './sortOptions/sortOptions.jsx';

class RatingsApp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      reviewList : [],
      reviewsReady: false,
      writeReviewModal: false
    }

    this.writeReviewClick = this.writeReviewClick.bind(this);
    this.exitWriteReviewClick = this.exitWriteReviewClick.bind(this);
  }

  componentDidMount() {
    axios.get(`/reviews/?product_id=${this.props.productID}`)
      .then((results) => {
        console.log('results data', results.data);
        this.setState({
          reviewList : results.data,
          reviewsReady: true
        })
      })
      .catch((err) => {
        console.log('error on review GET request', err)
      })
  }


  handleReviewData(reviewData) {
    //axiosPost here
  }

  exitWriteReviewClick(e) {
    this.setState({
      writeReviewModal: false
    })
  }

  writeReviewClick(e) {
    this.setState({
      writeReviewModal: true
    })
  }

  render() {
    if (this.state.writeReviewModal) {
      return(
        <div>
            Let's write a review.
            <WriteReview />
            <br />
            <button onClick={this.exitWriteReviewClick}>Exit write review</button>
        </div>
      )
    }
    return(
      <div>
        {
          this.state.reviewsReady === true &&
      <div className="reviewsGridContainer" style={{
        display: 'grid',
        borderStyle: 'solid',
        borderColor: 'red',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(8, 1fr)',
        padding: '20px',
        gridGap: '20px',
        rowGap: '20px',
        justifyContent: 'center space-around',
        alignContent: 'center',
        borderRadius: '20px',
        padding: '20px',
        width: '95vw',
        height: '95vh'
      }}>

        <div className="ratingBreakdownGridBox" style={{
          borderStyle: 'solid',
          borderColor: 'yellow',
          padding: '10px',
          borderRadius: '20px',
          gridColumn: '1',
          gridRow: '1/4',
        }}>
          <RatingBreakdown />
        </div>

        <div className="productBreakdownGridBox" style={{
          borderStyle: 'solid',
          borderColor: 'orange',
          borderRadius: '20px',
          padding: '20px',
          gridColumn: '1',
          gridRow: '4/7',
        }}>
          <ProductBreakdown />
        </div>

        <div className="sortOptionsBreakdownGridBox" style={{
          borderStyle: 'solid',
          borderColor: 'teal',
          borderRadius: '20px',
          padding: '20px',
          gridColumn: '2',
          gridRow: '1'
        }}>
          <SortOptions />
        </div>

        <div className="reviewListGridBox" style={{
          borderStyle: 'solid',
          borderColor: 'purple',
          borderRadius: '20px',
          padding: '20px',
          gridColumn: '2/5',
          gridRow: '2/8',
          overflow: 'auto'
        }}>
          <ReviewList reviewList={this.state.reviewList}/>
        </div>

        <div className="writeReviewGridBox" style={{
          borderStyle: 'solid',
          borderColor: 'green',
          borderRadius: '20px',
          padding: '20px',
          gridColumn: '2/3',
          gridRow: '8'
        }}>
          <button onClick={this.writeReviewClick}>Write Review</button>
          {/* <WriteReview className="writeReviewGridBox"/> */}
        </div>

        <div className="viewMoreReviewsGridBox" style={{
          borderStyle: 'solid',
          borderRadius: '20px',
          padding: '20px',
          borderColor: 'pink',
          gridColumn: '3',
          gridRow: '8'
        }}>
          <button>More Reviews</button>
          {/* On click, this changes state of reviews to an extra two reviews */}
        </div>
    </div>
    }
    </div>
    )
  }
}

export default RatingsApp

{/* /* General grid for Reviews and ratings

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
}

.viewMoreReviewsGridBox {
  border-style: solid;
  border-color: pink;
  grid-column: 3;
} */}
