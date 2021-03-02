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
        gridGap: '20px',
        padding: '10px',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: 'minmax(5, 1fr) 200px',
        borderColor: 'grey',
        boxShadow: '5px 5px 10px grey'
      }}>

        <div className="ratings-starRatings" style={{
          borderStyle: 'solid',
          borderColor: 'black',
          borderRadius: '10px',
          padding: '5px',
          borderWidth: '1px',
          alignContent: 'center',
          gridRow: '1',
          gridColumn: '1',
        }}>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          {`Star rating: ${review.rating}`}
        </div>
        <br />
        <div style={{
          borderStyle: 'solid',
          borderColor: 'black',
          borderRadius: '10px',
          borderWidth: '1px',
          padding: '5px',
          justifyContent: 'center',
          gridRow: '1',
          gridColumn: '3'
        }}>
          {`Reviewer name: ${review.reviewer_name}`}
        </div>
        <br />
        <div style={{
          borderStyle: 'solid',
          borderColor: 'black',
          borderRadius: '10px',
          borderWidth: '1px',
          padding: '5px',
          justifyContent: 'center',
          gridRow: '1',
          gridColumn: '4'
        }}>
          {`Date: ${review.date}`}
        </div>
        <br />
        <div style={{
            borderStyle: 'solid',
            borderColor: 'black',
            borderRadius: '10px',
            borderWidth: '1px',
            padding: '5px',
            justifyContent: 'center',
            gridRow: '2',
            gridColumn: '1/-1'
        }}>
          {`Review summary: ${review.summary}`}
        </div>
        <br />
        <div style={{
          borderStyle: 'solid',
          borderColor: 'black',
          borderRadius: '10px',
          borderWidth: '1px',
          padding: '5px',
          gridRow: '3',
          gridColumn: '1/-1'
        }}>
          {`Review body: ${review.body}`}
        </div>
        <br />
        <div style={{
          borderStyle: 'solid',
          borderColor: 'black',
          borderRadius: '10px',
          borderWidth: '1px',
          padding: '5px',
          gridRow: '5',
          gridColumn: '1/-1'
        }}>
          {`Response: ${review.response}`}
        </div>
        <br />
        <div style={{
          borderStyle: 'solid',
          borderColor: 'black',
          borderRadius: '10px',
          borderWidth: '1px',
          padding: '5px',
          gridRow: '4',
          gridColumn: '1/-1'
        }}>
          {`Recommended: ${review.recommend}`}
        </div>
        <br />
        <div style={{
          borderStyle: 'solid',
          borderColor: 'black',
          borderRadius: '10px',
          borderWidth: '1px',
          padding: '5px',
          gridRow: '6',
          gridColumn: '1/-1'
        }}>
          {`Helpful? Yes (${review.helpfulness}) | Report`}
        </div>
      </div>
    )
  }
}

export default ReviewListEntry