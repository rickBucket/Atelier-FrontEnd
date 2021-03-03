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
      metaData: [],
      reviewsReady: false,
      writeReviewModal: false
    }

    this.writeReviewClick = this.writeReviewClick.bind(this);
    this.exitWriteReviewClick = this.exitWriteReviewClick.bind(this);
    this.handleReviewData = this.handleReviewData.bind(this);
  }

  componentDidMount() {
    ////GET product reviews/////
    axios.get(`/reviews/?product_id=${this.props.productID}`)
      .then((results) => {
        this.setState({
          reviewList : results.data,
          reviewsReady: true
        })
      })
      .catch((err) => {
        console.log('error on review GET request', err)
      })
    ////GET product meta data//////
    axios.get(`/reviews/?product_id=${this.props.productID}&meta=meta`)
      .then((results) => {
        this.setState({
          metaData: results.data,
        })
        console.log(this.state)
      })
      .catch((err) => {
        console.log('error on meta GET request', err)
      })
  }


  handleReviewData(reviewData) {
    console.log(reviewData)
    //axiosPost here
    axios.post('/reviews', reviewData)
      .then(results => {
        console.log('post results client side', results)
      })
      .catch(err => {
        console.log('err on review POST', err)
      })
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
            <WriteReview handleReviewData={this.handleReviewData} productID={this.props.productID} metaData={this.state.metaData}/>
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
        gridTemplateRows: 'minmax(8, 1fr) 200px',
        gridGap: '20px',
        rowGap: '20px',
        borderRadius: '20px',
        padding: '20px',
        height: '85vh'
      }}>

        <div className="ratingBreakdownGridBox" style={{
          padding: '10px',
          boxShadow: '5px 5px 10px gold',
          borderRadius: '20px',
          gridColumn: '1',
          gridRow: '1/4',
        }}>
          <RatingBreakdown metaData={this.state.metaData}/>
        </div>

        <div className="productBreakdownGridBox" style={{
          boxShadow: '5px 5px 10px orange',
          borderRadius: '20px',
          padding: '20px',
          gridColumn: '1',
          gridRow: '4/7',
        }}>
          <ProductBreakdown />
        </div>

        <div className="sortOptionsBreakdownGridBox" style={{
          boxShadow: '5px 5px 10px teal',
          borderRadius: '20px',
          padding: '20px',
          gridColumn: '2',
          gridRow: '1'
        }}>
          <SortOptions />
        </div>

        <div className="reviewListGridBox" style={{
          borderRadius: '20px',
          padding: '20px',
          boxShadow: '5px 5px 10px purple',
          gridColumn: '2/5',
          gridRow: '2/8',
          overflow: 'auto'
        }}>
          <ReviewList reviewList={this.state.reviewList}/>
        </div>

        <div className="writeReviewGridBox" style={{
          boxShadow: '5px 5px 10px green',
          borderRadius: '20px',
          padding: '20px',
          gridColumn: '2/3',
          gridRow: '8'
        }}>
          <button onClick={this.writeReviewClick} style={{
            borderRadius: '20px',
            boxShadow: '5px 5px 10px green',
            padding: '10px',
          }}>Write Review</button>
          {/* <WriteReview className="writeReviewGridBox"/> */}
        </div>

        <div className="viewMoreReviewsGridBox" style={{
          borderRadius: '20px',
          boxShadow: '5px 5px 10px pink',
          padding: '20px',
          gridColumn: '3',
          gridRow: '8',
        }}>
          <button style={{
            borderRadius: '20px',
            boxShadow: '5px 5px 10px pink',
            padding: '10px',
          }}>More Reviews</button>
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
