import React from 'react';
import RatingsBreakdownList from './ratingsBreakdownList';
import StarRating from '../../shared/starRating';

const gridLayout = {
  display: 'grid',
  gridTemplateColumns: 'repeat(1 1fr)',
  gridTemplateRows: 'minwidth(5 1fr) 100px',
  alignItems: 'center',
};

const recommendedAvgStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '15px',
};

const avgRatingSpacing = {
  gridColumn: '1',
  gridRow: '2',
  fontSize: '80px',
  textAlign: 'center',
};

const headerStyle = {
  gridRow: '1',
  gridColumn: '1',
  color: 'grey',
  textAlign: 'center',
};

const averageRating = (obj) => {
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
};

const recommendedAverage = (obj) => {
  const total = Number(obj.false) + Number(obj.true);
  const result = Number(obj.true) / total;

  if (isNaN(result.toFixed(2) * 100)) {
    return 0;
  }
  return result.toFixed(2) * 100;
};

const RatingBreakdown = (props) => {
  const { ratings } = props.metaData;
  const { recommended } = props.metaData;
  return (
    <div style={gridLayout}>
      <div style={headerStyle}>
        Ratings & Reviews
      </div>

      <div style={avgRatingSpacing}>
        {averageRating(ratings).toFixed(1)}
      </div>

      <div style={{
        gridColumn: '1',
        gridRow: '3',
      }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <StarRating averageRating={averageRating(ratings)} height={36} width={31} />
        </div>
      </div>

      <div style={{
        gridColumn: '1',
        gridRow: '4',
        color: 'grey',
        textAlign: 'center',
      }}
      >
        <div style={recommendedAvgStyle}>
          {`${recommendedAverage(recommended)}% of reviews recommend this product`}
        </div>
      </div>
      <div style={{
        gridColumn: '1',
        gridRow: '5',
      }}
      >
        <RatingsBreakdownList metaData={props.metaData} />
      </div>
    </div>
  );
};

export default RatingBreakdown;
