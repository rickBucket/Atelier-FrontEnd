import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ReviewList from './reviewList/reviewList';
import WriteReview from './writeReview/writeReview';
import RatingBreakdown from './ratingBreakdown/ratingBreakdown';
import ProductBreakdown from './productBreakdown/productBreakdown';
import SortOptions from './sortOptions/sortOptions';

const gridLayout = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridTemplateRows: 'minmax(6, 1fr) 200px',
  gridGap: '10px',
  rowGap: '20px',
  borderRadius: '20px',
  padding: '20px',
  height: '90vh',
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
  maxWidth: '80%',
  maxHeight: '70%',
  margin: 'auto',
};

const ratingGrid = {
  gridColumn: '1',
  gridRow: '2',
};

const addReviewBtnStyle = {
  border: '1px solid grey',
  boxShadow: '2px 2px 4px grey',
  backgroundColor: 'white',
  padding: '10px',
  marginLeft: '20px',
  width: 'auto',
  maxWidth: '300px',
  minWidth: '150px',
};

const noReviewsAddBtn = {
  border: '1px solid grey',
  boxShadow: '2px 2px 4px grey',
  backgroundColor: 'white',
  padding: '10px',
  width: '300px',
  margin: 'auto',
  gridRow: '2',
};

const moreReviewsBtn = {
  border: '1px solid grey',
  width: '150px',
  boxShadow: '2px 2px 4px grey',
  backgroundColor: 'white',
  padding: '10px',
};

const modalStyle = {
  backdropFilter: 'blur(8px) contrast(70%)',
  backgroundColor: 'rgb(0,0,0)',
  backgroundColor: 'rgba(0,0,0,0.4)',
  zIndex: '150',
  height: '100%',
  width: '100%',
  position: 'fixed',
  top: '0',
  left: '0',
  overflow: 'hidden',
  paddingTop: '80px',
};

const innerModalStyle = {
  backgroundColor: 'white',
  width: '50%',
  minWidth: '580px',
  maxWidth: '100%',
  maxHeight: '80%',
  height: '80%',
  margin: 'auto',
  padding: '10px',
  border: 'none',
  overflow: 'auto',
  borderRadius: '20px',
};

const productStyle = {
  maxWidth: '100%',
  marginTop: '10px',
  margin: 'auto',
  gridColumn: '1',
  gridRow: '3',
};

const sortOptionsStyle = {
  marginTop: '40px',
  marginLeft: '30px',
  gridColumn: '2/-1',
  gridRow: '1',
};

const reviewListStyle = {
  gridColumn: '2/-1',
  gridRow: '2/5',
  overflow: 'auto',
  maxWidth: '90%',
  marginLeft: '20px',
  listStyle: 'none',
};

const reviewButtonsStyle = {
  width: '100%',
  gridColumn: '2/-1',
  gridRow: '5',
};

class RatingsApp extends React.Component {
  constructor(props) {
    super(props);
    const { metaData } = this.props;
    this.state = {
      reviewList: [],
      metaData,
      reviewEnd: 2,
      listSort: 0,
      reviewsReady: false,
      writeReviewModal: false,
      noReviews: false,
      hideMoreReviews: false,
    };

    this.writeReviewClick = this.writeReviewClick.bind(this);
    this.exitWriteReviewClick = this.exitWriteReviewClick.bind(this);
    // this.handleReviewData = this.handleReviewData.bind(this);
    this.moreReviewsClick = this.moreReviewsClick.bind(this);
    this.handlePut = this.handlePut.bind(this);
    this.listSortChange = this.listSortChange.bind(this);
  }

  componentDidMount() {
    /// /GET product reviews/////
    const { productID } = this.props;

    axios.get(`/reviews/?product_id=${productID}&count=6`)
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

  moreReviewsClick() {
    const { productID } = this.props;
    const { reviewEnd } = this.state;
    const { reviewList } = this.state;
    const newEnd = reviewEnd + 2;
    if (newEnd > reviewList.length) {
      this.setState({
        hideMoreReviews: true,
      });
    }
    if (newEnd === reviewList.length - 1 || newEnd === reviewList.length) {
      axios.get(`/reviews/?product_id=${productID}&count=${newEnd + 20}`)
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

  exitWriteReviewClick() {
    this.setState({
      writeReviewModal: false,
    });
  }

  writeReviewClick(e) {
    this.setState({
      writeReviewModal: true,
    });
  }

  listSortChange(e) {
    this.setState({
      listSort: e.target.value,
    });
  }

  render() {
    const { noReviews } = this.state;
    const { metaData } = this.state;
    const { writeReviewModal } = this.state;
    const { reviewsReady } = this.state;
    const { reviewList } = this.state;
    const { listSort } = this.state;
    const { reviewEnd } = this.state;
    const { hideMoreReviews } = this.state;
    const { productID } = this.props;
    if (noReviews) {
      return (
        <div style={noReviewsGrid}>
          <div style={{ textAlign: 'center', fontSize: '40px', gridRow: '1' }}>Be the first to write a review!</div>
          <button id="addReview" type="button" onClick={this.writeReviewClick} style={noReviewsAddBtn}>ADD A REVIEW +</button>
          {
          writeReviewModal
          && (
          <div style={modalStyle} role="button" onClick={this.exitWriteReviewClick}>
            <div style={innerModalStyle} onClick={(e) => e.stopPropagation()}>
              <WriteReview
                handleReviewData={this.handleReviewData}
                productID={productID}
                metaData={metaData}
              />
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
          reviewsReady === true
      && (
      <div style={gridLayout}>

        <div style={ratingGrid}>
          <RatingBreakdown metaData={metaData} reviewList={reviewList} />
        </div>

        <div style={productStyle}>
          <ProductBreakdown metaData={metaData} />
        </div>

        {
          writeReviewModal
          && (
          <div style={modalStyle} role="button" onClick={this.exitWriteReviewClick}>
            <div style={innerModalStyle} onClick={(e) => e.stopPropagation()}>
              <WriteReview
                handleReviewData={this.handleReviewData}
                productID={productID}
                metaData={metaData}
              />
              <br />
            </div>
          </div>
          )
        }

        <div style={sortOptionsStyle}>
          <SortOptions
            metaData={metaData}
            listSort={listSort}
            listSortChange={this.listSortChange}
          />
        </div>

        <div style={reviewListStyle}>
          <ReviewList
            reviewList={reviewList}
            reviewEnd={reviewEnd}
            handlePut={this.handlePut}
          />
        </div>

        <div style={reviewButtonsStyle}>
          <div style={{ display: 'flex', margin: 'auto', justifyContent: 'space-evenly' }}>
            <div style={{ display: 'flex' }}>
              <button id="addReview" type="button" onClick={this.writeReviewClick} style={addReviewBtnStyle}>ADD A REVIEW +</button>
            </div>

            {
          reviewList.length > 2 && hideMoreReviews === false
        && (
          <div style={{ display: 'flex' }}>
            <button
              id="moreReviews"
              type="button"
              style={moreReviewsBtn}
              onClick={this.moreReviewsClick}
            >
              MORE REVIEWS
            </button>
          </div>
        )
        }
          </div>
        </div>

      </div>
      )
    }
      </div>
    );
  }
}

RatingsApp.propTypes = {
  metaData: PropTypes.node.isRequired,
  productID: PropTypes.node.isRequired,
};

export default RatingsApp;
