import React from 'react';
import axios from 'axios';
import ReviewList from './reviewList.jsx';
import StarRating from '../../shared/starRating.jsx';
import PhotosMap from './photosMap.jsx';

const gridLayout = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplatRows: 'repeat(5, 1fr)',
  borderBottom: '1px solid grey',
  paddingTop: '10px',
  paddingBottom: '10px',
};

const starLayout = {
  gridColumn: '1/3',
  fontSize: '20px',
  display: 'flex',
  wrap: 'nowrap',
  zIndex: '-1',
  width: '100%',
};

const nameLayout = {
  padding: '5px',
  textAlign: 'right',
  gridRow: '1',
  gridColumn: '2',
  color: 'grey',
  fontSize: '13px',
};

const dateLayout = {
  padding: '5px',
  textAlign: 'center',
  gridRow: '1',
  gridColumn: '3',
  color: 'grey',
  fontSize: '13px',
};

const reviewLayout = {
  padding: '5px',
  justifyContent: 'center',
  gridRow: '2',
  gridColumnEnd: 'span 3',
  fontWeight: 'bold',
};

const bodyLayout = {
  padding: '5px',
  fontSize: '13px',
  gridRow: '3',
  gridColumnEnd: 'span 3',
};

const recommendLayout = {
  padding: '5px',
  color: 'grey',
  fontSize: '12px',
  gridRow: '4',
  gridColumn: '1/-1',
};

const responseLayout = {
  padding: '5px',
  fontSize: '13px',
  gridRow: '5',
  gridColumnEnd: 'span 3',
  backgroundColor: 'lightgrey',
};

const photoLayout = {
  display: 'flex',
};

const helpfulnessLayout = {
  display: 'flex',
  padding: '5px',
  color: 'grey',
  fontSize: '11px',
  gridRowEnd: '6',
  gridColumn: '1',
};

const emptyDiv = {
  height: '0px',
  width: '0px',
};

class ReviewListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.handlePutEntry = this.handlePutEntry.bind(this);
    this.averageRating = this.averageRating.bind(this);
  }

  averageRating(obj) {
    let wholeTotal = 0;
    let responseTotal = 0;
    for (const star in obj) {
      wholeTotal += (Number(obj[star]) * Number(star));
      responseTotal += Number(obj[star]);
    }
    const result = wholeTotal / responseTotal;
    if (isNaN((Math.round(result * 4) / 4).toFixed(1))) {
      return 0;
    }
    return result.toFixed(1);
  }

  handlePutEntry(e) {
    axios.put('/reviews', {
      review_id: this.props.review.review_id,
      type: e.target.id,
    })
      .then((results) => {
        alert('Your request has been received!');
      })
      .catch((err) => {
        console.log(err);
        alert('There\'s been an issue with your request');
      });
  }

  render() {
    const { review } = this.props;
    return (
      <div className="ratings-flexbox-container" style={gridLayout}>

        <div style={{ display: 'flex', wrap: 'nowrap', zIndex: '-1' }}>
          <StarRating averageRating={review.rating} height={18} width={15} />
        </div>
        <br />

        <div style={nameLayout}>
          {review.reviewer_name}
          ,
        </div>
        <br />

        <div style={dateLayout}>
          {new Date(review.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
        <br />

        {
          review.summary
            ? (
              <div style={reviewLayout}>
                {review.summary}
              </div>
            )
            : <div style={emptyDiv} />
        }
        <br />

        <div style={bodyLayout}>
          {review.body}
        </div>
        <br />

        {
        review.response !== null
          ? (
            <div style={responseLayout}>
              <b>Response from seller: </b>
              <br />
              <div>{review.response}</div>
            </div>
          )
          : <div style={emptyDiv} />
        }
        <br />

        {
        review.recommend === true
          ? (
            <div style={recommendLayout}>
              ✓ I recommend this product
            </div>
          )
          : <div style={emptyDiv} />
        }
        <br />

        {
          review.photos.length > 0
            ? <PhotosMap photos={review.photos} style={photoLayout} />
            : <div style={emptyDiv} />
        }

        <div style={helpfulnessLayout}>
          Helpful?
          {' '}
          <u onClick={this.handlePutEntry} id="helpful">Yes</u>
          {' '}
          {`(${review.helpfulness}) | `}
          <u onClick={this.handlePutEntry} id="report">Report</u>
        </div>

      </div>
    );
  }
}

export default ReviewListEntry;
