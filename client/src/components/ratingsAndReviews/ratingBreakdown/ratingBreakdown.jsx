import React from 'react';
import RatingsBreakdownList from './ratingsBreakdownList.jsx'

class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props)

    this.averageRating = this.averageRating.bind(this);
    this.recommendedAverage = this.recommendedAverage.bind(this);
  }


  averageRating(obj){
    var wholeTotal = 0;
    var responseTotal = 0;
    for (var star in obj) {
      wholeTotal += (Number(obj[star]) * Number(star))
      responseTotal += Number(obj[star])
    }
    var result = wholeTotal / responseTotal;
    if (isNaN((Math.round(result * 4) / 4).toFixed(2))) {
      return 0
    } else {
      return (Math.round(result * 4) / 4).toFixed(2);
    }
  }

  recommendedAverage(obj) {
    var total = Number(obj.false) + Number(obj.true);
    var result = Number(obj.true) / total;

    if (isNaN(result.toFixed(2) * 100)) {
      return 0
    } else {
      return result.toFixed(2) * 100;
    }
  }

//   // Multiply the number of individuals selecting each rating by the corresponding rating value (1 – 5)
// Add the results of those calculations together
// Divide that result by the total number of responses to the question

  render() {

    const ratingsObj = this.props.metaData.ratings;
    const recommendedObj = this.props.metaData.recommended;

    return(
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2 1fr)',
        gridTemplateRows: 'minwidth(4 1fr) 100px',
        padding: '10px',
        gridGap: '5px',
        alignItems: 'center'
      }}>
        <div style={{
          gridRow: '1',
          gridColumn: '1/-1',
          color: 'grey'
        }}>
          {`Ratings & Reviews`}
        </div>
        <div style={{
          gridColumn: '2',
          gridRow: '2',
        }}>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
        </div>
        <div style={{
          gridColumn: '1',
          gridRow: '2',
          fontSize: '80px',
        }}>
          {this.averageRating(ratingsObj)}
        </div>
        <div style={{
          gridColumn: '1/-1',
          gridRow: '3',
          color: 'grey'
        }}>
          {`${this.recommendedAverage(recommendedObj)}% of reviews recommend this product`}
        </div>
        <div style={{
          gridColumn: '1/-1',
          gridRow: '4',
        }}>
          <RatingsBreakdownList metaData={this.props.metaData}/>
        </div>
      </div>
    )
  }
}

export default RatingBreakdown