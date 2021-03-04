import React from 'react';
import ReviewList from './reviewList.jsx';
import axios from 'axios';

class ReviewListEntry extends React.Component {
  constructor(props) {
    super(props)

    this.handlePutEntry = this.handlePutEntry.bind(this);
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
      <div className="ratings-flexbox-container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: 'minmax(5, 1fr) 200px',
        borderRadius: '20px',
        boxShadow: '5px 5px 10px grey',
        gridGap: '20px',
        padding: '10px',
        alignItems: 'center'
      }}>

        <div className="ratings-starRatings" style={{
          boxShadow: '5px 5px 10px grey',
          borderRadius: '10px',
          padding: '5px',
          alignContent: 'center',
          gridRow: '1',
          gridColumn: '1',
        }}>
          <span className="fa fa-star"></span>
          {`Star rating: ${review.rating}`}
        </div>
        <br />
        <div style={{
          boxShadow: '5px 5px 10px grey',
          borderRadius: '10px',
          padding: '5px',
          justifyContent: 'center',
          gridRow: '1',
          gridColumn: '3'
        }}>
          <b>{review.reviewer_name}</b>
        </div>
        <br />
        <div style={{
          boxShadow: '5px 5px 10px grey',
          borderRadius: '10px',
          padding: '5px',
          justifyContent: 'center',
          gridRow: '1',
          gridColumn: '4'
        }}>
          {new Date(review.date).toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
        <br />
        {
          review.summary &&
        <div style={{
            boxShadow: '5px 5px 10px grey',
            borderRadius: '10px',
            padding: '5px',
            justifyContent: 'center',
            gridRow: '2',
            gridColumn: '1/-1',
            fontWeight: 'bold'
        }}>
          {review.summary}
        </div>
        }
        <br />
        <div style={{
          boxShadow: '5px 5px 10px grey',
          borderRadius: '10px',
          padding: '5px',
          gridRow: '3',
          gridColumn: '1/-1'
        }}>
          {review.body}
        </div>
        <br />
        {
        review.response !== null &&
        <div style={{
          boxShadow: '5px 5px 10px grey',
          borderRadius: '10px',
          padding: '5px',
          gridRow: '5',
          gridColumn: '1/-1',
          backgroundColor: 'lightgrey'
        }}>
          {`Response: ${review.response}`}
        </div>
        }
        <br />

        {
        review.recommend === true &&
        <div style={{
          boxShadow: '5px 5px 10px grey',
          borderRadius: '10px',
          padding: '5px',
          gridRow: '4',
          gridColumn: '1/-1'
        }}>
          {`✓ I recommend this product`}
        </div>
        }

        <br />
        <div style={{
          boxShadow: '5px 5px 10px grey',
          borderRadius: '10px',
          padding: '5px',
          gridRow: '6',
          gridColumn: '1/-1',
          fontSize: '12px'
        }}>
          {`Helpful?`} <u onClick={this.handlePutEntry} id="helpful">Yes</u> {`(${review.helpfulness}) | `}<u onClick={this.handlePutEntry} id="report">Report</u>
        </div>
      </div>
    )
  }
}

export default ReviewListEntry