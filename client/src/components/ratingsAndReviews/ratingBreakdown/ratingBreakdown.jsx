import React from 'react';
import RatingsBreakdownList from './ratingsBreakdownList.jsx'

const gridLayout = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2 1fr)',
  gridTemplateRows: 'minwidth(4 1fr) 100px',
  padding: '10px',
  gridGap: '5px',
  alignItems: 'center'
};

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
    if (isNaN((Math.round(result * 4) / 4).toFixed(1))) {
      return 0
    } else {
      return result.toFixed(1);
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

  render() {

    const ratingsObj = this.props.metaData.ratings;
    const recommendedObj = this.props.metaData.recommended;
    console.log(Math.abs(0.5 - .25))

    return(
      <div style={gridLayout}>
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
          <div style={{backgroundColor: 'red'}}>
          <span className="fa fa-star-o" style={{background: 'rgba(0,0,0,0)'}}></span>
          <span className="fa fa-star-o" ></span>
          <span className="fa fa-star-o"></span>
          <span className="fa fa-star-o"></span>
          <span className="fa fa-star-o"></span>
          </div>
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
          <RatingsBreakdownList metaData={this.props.metaData} reviewList={this.props.reviewList}/>
        </div>
      </div>
    )
  }
}

export default RatingBreakdown