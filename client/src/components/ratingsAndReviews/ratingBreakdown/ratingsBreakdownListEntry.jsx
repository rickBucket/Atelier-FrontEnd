import React from 'react';

const starBar = {
  height: '8px',
  marginLeft: '8px',
  marginRight: '10px',
  marginBottom: '20px',
  width: '130px',
  border: 'none',
  backgroundColor: 'rgba(232, 232, 232, .8)',
  boxShadow: '2px 2px 4px gold',
};

const starBarFlex = {
  display: 'flex',
  margin: 'auto',
  cursor: 'pointer',
};

const starFont = {
  fontSize: '12px',
  color: 'grey',
};

const starPercentage = (obj, key) => {
  let total = 0;
  for (const star in obj) {
    total += Number(obj[star]);
  }
  if (isNaN((Number(obj[key]) / total).toFixed(2))) {
    return 0;
  }
  return ((Number(obj[key]) / total).toFixed(2) * 100);
};

const sortByStar = (e) => {
  // when clicked
  // take certain star rating
  // apply filter to each object
  // return array of only objects with that star rating
  console.log(e.target.id);
};

const RatingsBreakdownListEntry = ({
  rating, ratings, totalRating, index,
}) => (
  <div id={rating} style={starBarFlex} onClick={sortByStar}>
    <u style={starFont}>
      {`${rating} stars`}
    </u>

    <div style={starBar}>
      <div style={{
        background: 'rgba(51, 170, 51, .8)',
        height: '100%',
        borderRadius: 'inherit',
        width: `${starPercentage(ratings, rating)}%`,
      }}
      />
    </div>
    <div style={starFont}>{totalRating}</div>
  </div>
);

export default RatingsBreakdownListEntry;
