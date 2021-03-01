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
        borderColor: 'grey',
        padding: '10px',
      }}><b>Individual Review Tile</b>

        <div className="ratings-starRatings">
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
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