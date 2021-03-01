import React from 'react';
import ReviewList from './reviewList.jsx';

class ReviewListEntry extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    var review = this.props.review
    return(
      <div className="ratings-flexbox-container" style={{
        display: 'grid',
        borderStyle: 'solid',
        borderRadius: '20px',
        borderColor: 'grey',
        padding: '10px',
      }}><b>Individual Review Tile</b>

        <div className="ratings-starRatings">
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          {`Star rating: ${review.rating}`}
        </div>
        <br />
        <div>
          {`Reviewer name: ${review.reviewer_name}`}
        </div>
        <br />
        <div>
          {`Date: ${review.date}`}
        </div>
        <br />
        <div style={{

        }}>
          {`Review summary: ${review.summary}`}
        </div>
        <br />
        <div style={{
          borderStyle: 'solid',
          borderWidth: '1px',
          borderRadius: '10px',
          padding: '5px',
        }}>
          {`Review body: ${review.body}`}
        </div>
        <br />
        <div>
          {`Response: ${review.response}`}
        </div>
        <br />
        <div>
          {`Helpful? Yes (${review.helpfulness}) | Report`}
        </div>
        <br />
        <div>
          {`Recommended: ${review.recommend}`}
        </div>
      </div>
    )
  }
}

export default ReviewListEntry