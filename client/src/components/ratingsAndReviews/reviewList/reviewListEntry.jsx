import React from 'react';
import ReviewList from './reviewList.jsx';
import axios from 'axios';
import StarRating from '../../shared/starRating.jsx';

const gridLayout = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridAutoFlow: 'dense',
  //gridTemplateRows: 'minmax(5, 1fr) 200px',
  gridAutoRows: 'auto',
  // borderRadius: '20px',
  border: 'solid',
  borderWidth: '2px',
  // boxShadow: '5px 5px 10px grey',
  // gridGap: '20px',
  padding: '10px',
  alignItems: 'center'
};

const starLayout = {
  // boxShadow: '5px 5px 10px grey',
  // borderRadius: '10px',
  gridColumn: '1/3',
  fontSize: '20px',
  display: 'flex',
  flexWrap: 'nowrap',
  width: '100%'
};

const nameLayout = {
  // boxShadow: '5px 5px 10px grey',
  // borderRadius: '10px',
  padding: '5px',
  textAlign: 'right',
  gridRow: '1',
  gridColumn: '2'
};

const dateLayout = {
  // boxShadow: '5px 5px 10px grey',
  // borderRadius: '10px',
  padding: '5px',
  textAlign: 'center',
  gridRow: '1',
  gridColumn: '3'
};

const reviewLayout = {
  // boxShadow: '5px 5px 10px grey',
  // borderRadius: '10px',
  padding: '5px',
  justifyContent: 'center',
  gridRow: '2',
  gridColumnEnd: 'span 3',
  fontWeight: 'bold'
};

const bodyLayout = {
  // boxShadow: '5px 5px 10px grey',
  // borderRadius: '10px',
  padding: '5px',
  gridRow: '3',
  gridColumnEnd: 'span 3'
}

const responseLayout = {
  // boxShadow: '5px 5px 10px grey',
  // borderRadius: '10px',
  padding: '5px',
  gridRow: '5',
  gridColumn: '1/-1',
  backgroundColor: 'lightgrey'
};

const recommendLayout = {
  // boxShadow: '5px 5px 10px grey',
  // borderRadius: '10px',
  padding: '5px',
  gridRow: '4',
  gridColumn: '1/-1'
};

const helpfulnessLayout = {
  // boxShadow: '5px 5px 10px grey',
  // borderRadius: '10px',
  padding: '5px',
  gridRow: '6',
  gridColumn: '1/-1',
  fontSize: '12px'
};



class ReviewListEntry extends React.Component {
  constructor(props) {
    super(props)

    this.handlePutEntry = this.handlePutEntry.bind(this);
    this.averageRating = this.averageRating.bind(this);
  }

  averageRating(obj){
    var wholeTotal = 0;
    var responseTotal = 0;
    for (var star in obj) {
      wholeTotal += (Number(obj[star]) * Number(star))
      responseTotal += Number(obj[star])
    }
    var result = wholeTotal / responseTotal;
    if (isNaN((Math.round(result * 4) / 4).toFixed(1))) {
      return 0
    } else {
      return result.toFixed(1);
    }
  }

  handlePutEntry(e){
    axios.put(`/reviews`, {
      review_id: this.props.review.review_id,
      type: e.target.id
    })
      .then((results) => {
        alert('Your request has been received!')
      })
      .catch((err) => {
        console.log(err)
        alert(`There's been an issue with your request`)
      })
  }


  render() {
    var review = this.props.review
    console.log(review.rating)
    return(
      <div className="ratings-flexbox-container" style={gridLayout}>

          <div>
           <StarRating averageRating={review.rating}/>
          </div>
        <br />

        <div style={nameLayout}>
          <b>{review.reviewer_name}</b>
        </div>
        <br />

        <div style={dateLayout}>
          {new Date(review.date).toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
        <br />

        {
          review.summary &&
        <div style={reviewLayout}>
          {review.summary}
        </div>
        }
        <br />

        <div style={bodyLayout}>
          {review.body}
        </div>
        <br />

        {
        review.response !== null &&
        <div style={responseLayout}>
          <b>Response from seller: </b>{review.response}
        </div>
        }
        <br />

        {
        review.recommend === true &&
        <div style={recommendLayout}>
          {`✓ I recommend this product`}
        </div>
        }
        <br />

        <div style={helpfulnessLayout}>
          {`Helpful?`} <u onClick={this.handlePutEntry} id="helpful">Yes</u> {`(${review.helpfulness}) | `}<u onClick={this.handlePutEntry} id="report">Report</u>
        </div>

      </div>
    )
  }
}

export default ReviewListEntry