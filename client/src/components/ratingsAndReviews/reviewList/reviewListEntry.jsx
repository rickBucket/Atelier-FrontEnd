import React from 'react';
import ReviewList from './reviewList.jsx';
import axios from 'axios';
import StarRating from '../../shared/starRating.jsx';

const gridLayout = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplatRows: 'repeat(5, 1fr)',
  border: '1px solid grey',
  padding: '10px',
};

const starLayout = {
  gridColumn: '1/3',
  fontSize: '20px',
  display: 'flex',
  flexWrap: 'nowrap',
  width: '100%'
};

const nameLayout = {
  padding: '5px',
  textAlign: 'right',
  gridRow: '1',
  gridColumn: '2',
  color: 'grey',
  fontSize: '13px'
};

const dateLayout = {
  padding: '5px',
  textAlign: 'center',
  gridRow: '1',
  gridColumn: '3',
  color: 'grey',
  fontSize: '13px'
};

const reviewLayout = {
  padding: '5px',
  justifyContent: 'center',
  gridRow: '2',
  gridColumnEnd: 'span 3',
  fontWeight: 'bold'
};

const bodyLayout = {
  padding: '5px',
  fontSize: '13px',
  gridRow: '3',
  gridColumnEnd: 'span 3'
}

const responseLayout = {
  padding: '5px',
  fontSize: '13px',
  gridRow: '5',
  gridColumn: '1/-1',
  backgroundColor: 'lightgrey'
};

const recommendLayout = {
  padding: '5px',
  fontSize: '13px',
  gridRow: '4',
  gridColumn: '1/-1'
};

const helpfulnessLayout = {
  padding: '5px',
  color: 'grey',
  fontSize: '11px',
  gridRow: '6',
  gridColumn: '1/-1',
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
    return(
      <div className="ratings-flexbox-container" style={gridLayout}>

          <div style={{display: 'flex', wrap: 'nowrap'}}>
           <StarRating averageRating={review.rating} height={15} width={13}/>
          </div>
        <br />

        <div style={nameLayout}>
          {review.reviewer_name},
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
        review.response !== null
        ? <div style={responseLayout}>
          <b>Response from seller: </b>
          <br />
          <div>{review.response}</div>
        </div>
        : <div style={{height: '0px', width: '0px'}}></div>
        }
        <br />

        {
        review.recommend === true
        ? <div style={recommendLayout}>
          {`✓ I recommend this product`}
        </div>
        : <div style={{height: '0px', width: '0px'}}></div>
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