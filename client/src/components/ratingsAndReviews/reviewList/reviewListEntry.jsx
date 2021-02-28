import React from 'react';
import ReviewList from './reviewList.jsx';

class ReviewListEntry extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    var review = this.props.review
    return(
      <div><b>Review List Entry Component</b>
        <div>
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
        <div>
          {`Review summary: ${review.summary}`}
        </div>
        <br />
        <div>
          {`Review body: ${review.body}`}
        </div>
        <br />
        <div>
          {`Response: ${review.response}`}
        </div>
        <br />
        <div>
          {`Helpfulness: ${review.helpfulness}`}
        </div>
        <br />
        <div>
          {`Recommended: ${review.recommend}`}
        </div>
        <div>
        -------------------------------------------
        </div>
      </div>
    )
  }
}

export default ReviewListEntry