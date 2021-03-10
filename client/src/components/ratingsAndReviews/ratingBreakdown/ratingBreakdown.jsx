import React from 'react';
import RatingsBreakdownList from './ratingsBreakdownList.jsx';
import StarRating from '../../shared/starRating.jsx';

const gridLayout = {
  display: 'grid',
  gridTemplateColumns: 'repeat(1 1fr)',
  gridTemplateRows: 'minwidth(5 1fr) 100px',
  // padding: '10px',
  // gridGap: '5px',
  alignItems: 'center',
};

class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props);

    this.averageRating = this.averageRating.bind(this);
    this.recommendedAverage = this.recommendedAverage.bind(this);
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
  return result;
}

  recommendedAverage(obj) {
    const total = Number(obj.false) + Number(obj.true);
    const result = Number(obj.true) / total;

    if (isNaN(result.toFixed(2) * 100)) {
      return 0;
    }
    return result.toFixed(2) * 100;
  }

  render() {
    const ratingsObj = this.props.metaData.ratings;
    const recommendedObj = this.props.metaData.recommended;

    return (
      <div style={gridLayout}>
        <div style={{
          gridRow: '1',
          gridColumn: '1',
          color: 'grey',
          textAlign: 'center',
        }}
        >
          Ratings & Reviews
        </div>

        <div style={{
          gridColumn: '1',
          gridRow: '2',
          fontSize: '80px',
          textAlign: 'center',
        }}
        >
          {this.averageRating(ratingsObj).toFixed(1)}
        </div>

        <div style={{
          gridColumn: '1',
          gridRow: '3',
        }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <StarRating averageRating={this.averageRating(ratingsObj)} height={36} width={31} />
          </div>
        </div>

        <div style={{
          gridColumn: '1',
          gridRow: '4',
          color: 'grey',
          textAlign: 'center',
        }}
        >
          <div style={{display: 'flex', justifyContent: 'center', marginBottom: '10px',}}>
          {`${this.recommendedAverage(recommendedObj)}% of reviews recommend this product`}
          </div>
        </div>
        <div style={{
          gridColumn: '1',
          gridRow: '5',
        }}
        >
          <RatingsBreakdownList metaData={this.props.metaData} reviewList={this.props.reviewList} />
        </div>
      </div>
    );
  }
}

export default RatingBreakdown;
