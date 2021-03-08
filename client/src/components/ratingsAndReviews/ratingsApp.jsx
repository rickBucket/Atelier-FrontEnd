/* eslint-disable class-methods-use-this */
/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import ReviewList from './reviewList/reviewList.jsx';
import WriteReview from './writeReview/writeReview.jsx';
import RatingBreakdown from './ratingBreakdown/ratingBreakdown.jsx';
import ProductBreakdown from './productBreakdown/productBreakdown.jsx';
import SortOptions from './sortOptions/sortOptions.jsx';

const gridLayout = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridTemplateRows: 'minmax(5, 1fr) 200px',
  gridGap: '10px',
  rowGap: '20px',
  borderRadius: '20px',
  padding: '20px',
  height: '80vh',
};

const noReviewsGrid = {
  display: 'grid',
  justifyContents: 'center',
  gridGap: '20px',
  paddingTop: '30px',
  paddingBottom: '30px',
};

const mainDiv = {
  paddingTop: '30px',
  paddingBottom: '30px',
  maxWidth: '70%',
  maxHeight: '70%',
  margin: 'auto',
};

const ratingGrid = {
  gridColumn: '1',
  gridRow: '1/3',
};

const addReviewBtnStyle = {
  boxShadow: '5px 5px 10px green',
  padding: '10px',
  width: '300px',
  margin: 'auto',
};

const noReviewsAddBtn = {
  boxShadow: '5px 5px 10px green',
  padding: '10px',
  width: '300px',
  margin: 'auto',
  gridRow: '2',
};

const modalStyle = {
  backdropFilter: 'blur(8px) contrast(70%)',
  backgroundColor: 'rgb(0,0,0)', /* Fallback color */
  backgroundColor: 'rgba(0,0,0,0.4)',
  zIndex: '150',
  height: '100%',
  width: '100%', /* Full height */
  position: 'fixed', /* Fix position on the top-left corner */
  top: '0',
  left: '0',
  overflow: 'auto', /* Enable scroll if needed */
  paddingTop: '80px', /* Location of the content container */
};

const innerModalStyle = {
  backgroundColor: 'white',
  width: '40%', /* Width in proportion to its parent container */
  maxWidth: '100%', /* Max width where it stops expanding */
  height: '80%', /* Height in proportion to its parent container */
  margin: 'auto', /* Auto margin according to the element width */
  padding: '10px',
  border: 'none',
  overflow: 'auto',
  borderRadius: '20px', /* Optional. Rounds container corners */
};

const productStyle = {
  maxWidth: '100%',
  marginLeft: '10%',
  marginRight: '10%',
  gridColumn: '1',
  gridRow: '3/6',
};

const sortOptionsStyle = {
  paddingTop: '10px',
  marginLeft: '30px',
  gridColumn: '2/-1',
  gridRow: '1',
};

const reviewListStyle = {
  gridColumn: '2/5',
  gridRow: '2/6',
  overflow: 'auto',
  maxWidth: '80%',
  marginLeft: '20px',
  listStyle: 'none',
};

const writeReviewStyle = {
  marginLeft: '30px',
  // marginLeft: '50%',
  gridColumn: '2/3',
  gridRow: '6',
};

const moreReviewsStyle = {
  marginLeft: '30px',
  maxHeight: '38px',
  gridColumn: '3',
  gridRow: '6',
};

class RatingsApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewList: [],
      metaData: [],
      reviewEnd: 2,
      listSort: 0,
      reviewsReady: false,
      metaReady: false,
      writeReviewModal: false,
      noReviews: false,
      hideMoreReviews: false,
    };

    this.writeReviewClick = this.writeReviewClick.bind(this);
    this.exitWriteReviewClick = this.exitWriteReviewClick.bind(this);
    this.handleReviewData = this.handleReviewData.bind(this);
    this.moreReviewsClick = this.moreReviewsClick.bind(this);
    this.handlePut = this.handlePut.bind(this);
    this.listSortChange = this.listSortChange.bind(this);
  }

  componentDidMount() {
    /// /GET product reviews/////
    axios.get(`/reviews/?product_id=${this.props.productID}&count=6`)
      .then((results) => {
        if (results.data.results.length === 0) {
          this.setState({
            noReviews: true,
          });
        }
        this.setState({
          reviewList: results.data.results,
          reviewsReady: true,
        });
      })
      .catch((err) => {
        console.log('error on review GET request', err);
      });
    /// /GET product meta data//////
    axios.get(`/reviews/?product_id=${this.props.productID}&meta=meta`)
      .then((results) => {
        this.setState({
          metaData: results.data,
          metaReady: true,
        });
      })
      .catch((err) => {
        console.log('error on meta GET request', err);
      });
  }

  handleReviewData(reviewData) {
    console.log(reviewData);
    // axiosPost here
    axios.post('/reviews', reviewData)
      .then((results) => {
        console.log('post results client side', results);
      })
      .catch((err) => {
        console.log('err on review POST', err);
      });
  }

  exitWriteReviewClick(e) {
    this.setState({
      writeReviewModal: false,
    });
  }

  moreReviewsClick(e) {
    const { reviewEnd } = this.state;
    const { reviewList } = this.state;
    const newEnd = reviewEnd + 2;
    if (newEnd > reviewList.length) {
      this.setState({
        hideMoreReviews: true,
      });
    }
    if (newEnd === reviewList.length - 1 || newEnd === reviewList.length) {
      axios.get(`/reviews/?product_id=${this.props.productID}&count=${newEnd + 20}`)
        .then((results) => {
          this.setState({
            reviewList: results.data.results,
            reviewEnd: newEnd,
          });
        })
        .catch((err) => {
          console.log('error on review GET request', err);
        });
    } else {
      this.setState({
        reviewEnd: newEnd,
      });
    }
  }

  handlePut(review_id, type) {
    console.log(review_id, type);
    axios.put(`/reviews/${review_id}/${type}`)
      .then((results) => {
        console.log(results.data);
      })
      .catch((err) => {
        console.log(err.data);
      });
  }

  writeReviewClick(e) {
    this.setState({
      writeReviewModal: true,
    });
  }

  listSortChange(e){
    this.setState({
      listSort: e.target.value
    })
  }

  render() {
    // no reviews edge
    if (this.state.noReviews) {
      return (
        <div style={noReviewsGrid}>
          <div style={{ textAlign: 'center', fontSize: '40px', gridRow: '1' }}>Be the first to write a review!</div>
          <button id="addReview" onClick={this.writeReviewClick} style={noReviewsAddBtn}>ADD A REVIEW +</button>
          {
          this.state.writeReviewModal
          && (
          <div style={modalStyle} onClick={this.exitWriteReviewClick}>
            <div style={innerModalStyle} onClick={(e) => e.stopPropagation()}>
              <WriteReview handleReviewData={this.handleReviewData} productID={this.props.productID} metaData={this.state.metaData} />
              <br />
            </div>
          </div>
          )
        }
        </div>
      );
    }
    return (
      <div style={mainDiv}>

        {
          this.state.reviewsReady === true
      && (
      <div style={gridLayout}>

        {
         this.state.metaReady === true
        && (
        <div style={ratingGrid}>
          <RatingBreakdown metaData={this.state.metaData} reviewList={this.state.reviewList} />
        </div>
        )
        }

        {
          this.state.writeReviewModal
          && (
          <div style={modalStyle} onClick={this.exitWriteReviewClick}>
            <div style={innerModalStyle} onClick={(e) => e.stopPropagation()}>
              <WriteReview handleReviewData={this.handleReviewData} productID={this.props.productID} metaData={this.state.metaData} />
              <br />
            </div>
          </div>
          )
        }

        {
          this.state.metaReady === true
          && (
          <div style={productStyle}>
            <ProductBreakdown metaData={this.state.metaData} />
          </div>
          )
        }

        {
          this.state.metaReady === true
        && (
        <div style={sortOptionsStyle}>
          <SortOptions metaData={this.state.metaData} listSort={this.state.listSort} listSortChange={this.listSortChange}/>
        </div>
        )
        }

        <div style={reviewListStyle}>
          <ReviewList reviewList={this.state.reviewList} reviewEnd={this.state.reviewEnd} handlePut={this.handlePut} />
        </div>

        <div style={writeReviewStyle}>
          <button id="addReview" onClick={this.writeReviewClick} style={addReviewBtnStyle}>ADD A REVIEW +</button>
        </div>

        {
          this.state.reviewList.length > 2 && this.state.hideMoreReviews === false
        && (
        <div style={moreReviewsStyle}>
          <button
            id="moreReviews"
            style={{
              boxShadow: '5px 5px 10px grey',
              padding: '10px',
            }}
            onClick={this.moreReviewsClick}
          >
            MORE REVIEWS
          </button>
        </div>
        )
        }

      </div>
      )
    }
      </div>
    );
  }
}

export default RatingsApp;
