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
  color: 'grey'
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

    {
        totalRating > 0
          ? <div style={starFont}>{totalRating}</div>
          : <div style={starFont}>0</div>
    }

  </div>
);

export default RatingsBreakdownListEntry;

// import React from 'react';
/*
const gridLayout = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'minwidth(5, 1fr) 50px',
  margin: 'auto',
};

const starBar = {
  height: '8px',
  marginLeft: '8px',
  marginRight: '10px',
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

class ratingsBreakdownList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.starPercentage = this.starPercentage.bind(this);
    this.sortByStar = this.sortByStar.bind(this);
  }

  starPercentage(obj, key) {
    let total = 0;
    for (const star in obj) {
      total += Number(obj[star]);
    }
    if (isNaN((Number(obj[key]) / total).toFixed(2))) {
      return 0;
    }
    return ((Number(obj[key]) / total).toFixed(2) * 100);
  }

  sortByStar(e) {
    // when clicked
    // take certain star rating
    // apply filter to each object
    // return array of only objects with that star rating
    console.log(e.target.id);
  }

  render() {
    const {ratings} = this.props.metaData;

    return (
      <div style={gridLayout}>

        <div id="5" style={starBarFlex} onClick={this.sortByStar}>

          <u style={{ fontSize: '12px', color: 'grey' }}>5 stars</u>
          <div style={starBar}>
            <div style={{
              background: 'rgba(51, 170, 51, .8)',
              height: '100%',
              borderRadius: 'inherit',
              width: `${this.starPercentage(ratings, '5')}%`,
            }}
            />
          </div>

          {
        ratings['5'] > 0
          ? <div style={{ fontSize: '12px', color: 'grey' }}>{ratings['5']}</div>
          : <div style={{ fontSize: '12px', color: 'grey' }}>0</div>
        }

        </div>

        <div id="starBreakdown" style={starBarFlex}>

          <u style={{ fontSize: '12px', color: 'grey' }}>4 stars </u>
          <div style={starBar}>
            <div style={{
              background: 'rgba(51, 170, 51, .8)',
              height: '100%',
              borderRadius: 'inherit',
              width: `${this.starPercentage(ratings, '4')}%`,
            }}
            />
          </div>

          {
        ratings['4'] > 0
          ? <div style={{ fontSize: '12px', color: 'grey' }}>{ratings['4']}</div>
          : <div style={{ fontSize: '12px', color: 'grey' }}>0</div>
        }

        </div>

        <div id="starBreakdown" style={starBarFlex}>

          <u style={{ fontSize: '12px', color: 'grey' }}>3 stars</u>
          <div style={starBar}>
            <div style={{
              background: 'rgba(51, 170, 51, .8)',
              height: '100%',
              borderRadius: 'inherit',
              width: `${this.starPercentage(ratings, '3')}%`,
            }}
            />
          </div>

          {
        ratings['3'] > 0
          ? <div style={{ fontSize: '12px', color: 'grey' }}>{ratings['3']}</div>
          : <div style={{ fontSize: '12px', color: 'grey' }}>0</div>
        }

        </div>
        <br />

        <div id="starBreakdown" style={starBarFlex}>

          <u style={{ fontSize: '12px', color: 'grey' }}>2 stars</u>
          <div style={starBar}>
            <div style={{
              background: 'rgba(51, 170, 51, .8)',
              height: '100%',
              borderRadius: 'inherit',
              width: `${this.starPercentage(ratings, '2')}%`,
            }}
            />
          </div>

          {
        ratings['2'] > 0
          ? <div style={{ fontSize: '12px', color: 'grey' }}>{ratings['2']}</div>
          : <div style={{ fontSize: '12px', color: 'grey' }}>0</div>
        }

        </div>
        <br />

        <div id="starBreakdown" style={starBarFlex}>

          <u style={{ fontSize: '12px', color: 'grey' }}>1 star</u>
          <div style={starBar}>
            <div style={{
              background: 'rgba(51, 170, 51, .8)',
              height: '100%',
              borderRadius: 'inherit',
              width: `${this.starPercentage(ratings, '1')}%`,
            }}
            />
          </div>

          {
        ratings['1'] > 0
          ? <div style={{ fontSize: '12px', color: 'grey' }}>{ratings['1']}</div>
          : <div style={{ fontSize: '12px', color: 'grey' }}>0</div>
        }

        </div>

      </div>
    );
  }
} */
