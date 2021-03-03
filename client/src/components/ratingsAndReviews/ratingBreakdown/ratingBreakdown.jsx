import React from 'react';

class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props)

  }


  componentDidMount(){

  }

  render() {
    console.log(this.props)
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
          3.5
        </div>
        <div style={{
          gridColumn: '1/-1',
          gridRow: '3',
          color: 'grey'
        }}>
          {`100% of reviews recommend this product`}
        </div>
        <div style={{
          gridColumn: '1/-1',
          gridRow: '4',
        }}>
          star breakdown component
        </div>
      </div>
    )
  }
}

export default RatingBreakdown