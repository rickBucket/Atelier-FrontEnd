import React from 'react';

const singleStarOutline = {
  height: '36px',
  width: '31px'
}

const singleStarFill = {
  position: 'relative',
  display: 'inline-block',
  height: '36px',
  backgroundColor: '#333333',
}

const singleStarContainer = {
  height: '36px',
  width: '31px',
  display: 'inline-block'
}

const StarRating = (props) => {
  let rating = props.averageRating || 0;
  let stars = [];
  while (stars.length < 5) {
      if (rating > 1) {
          stars.push(1);
      } else if (rating > 0) {
          let empty = Math.abs(0 - rating);
          let quart = Math.abs(0.25 - rating);
          let half = Math.abs(0.5 - rating);
          let three = Math.abs(0.75 - rating);
          let full = Math.abs(1 - rating);
          let closest = Math.min(empty, quart, half, three, full);
          switch (closest) {
              case (empty):
                  stars.push(0);
                  break;
              case quart:
                  stars.push(0.28);
                  break;
              case half:
                  stars.push(0.5);
                  break;
              case three:
                  stars.push(0.72);
                  break;
              case full:
                  stars.push(1.0);
                  break;
              default:
                  console.log("OOPS");
                  stars.push(0);
                  break;
          }
      } else {
          stars.push(0);
      }
      rating = rating - 1;
  }

  return (
    <div>
        {stars.map((item, i) => {
            return (
                <div style={singleStarContainer} key={i}>
                    <div style={{
                      position: 'relative',
                      display: 'inline-block',
                      height: '36px',
                      backgroundColor: '#333333',
                      width: `${parseInt(item*31)}px`
                      }}>
                        <img style={singleStarOutline} src="star.png" alt="stars alt"></img>
                    </div>
                </div>
            );
        })}
    </div>
);

};

export default StarRating;
