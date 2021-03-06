import React from 'react';

const gridLayout = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'minwidth(5, 1fr) 50px',
  justifyContent: 'center'
}

const starBar = {
  // position: 'relative',
  height: '8px',
  marginLeft: '8px',
  marginRight: '10px',
  width: '130px',
  border: 'none',
  backgroundColor: 'rgba(232, 232, 232, .8)',
  boxShadow: '2px 2px 4px gold'
}

const starBarFlex = {
  display: 'flex',
  // wrap: 'wrap'
  cursor: 'pointer'
  }


class ratingsBreakdownList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ratingsReady: false
    }

    this.starPercentage = this.starPercentage.bind(this);
    this.sortByStar = this.sortByStar.bind(this);
  }

  starPercentage(obj, key){
    var total = 0;
    for (var star in obj) {
      total += Number(obj[star])
    }
    if (isNaN((Number(obj[key])/total).toFixed(2))) {
      return 0
    } else {
      return ((Number(obj[key])/total).toFixed(2) * 100)
    }
  }

  sortByStar(e) {
    //when clicked
    //take certain star rating
    //apply filter to each object
    //return array of only objects with that star rating
    console.log(e.target.id)
  }

render() {

  const ratingsObj = this.props.metaData.ratings;

  return(
    <div style={gridLayout}>

      <div id="5" style={starBarFlex} onClick={this.sortByStar}>

        <u style={{fontSize: '12px', color: 'grey'}}>5 stars</u>
        <div style={starBar}>
          <div style={{
            background: 'rgba(51, 170, 51, .8)',
            height: '100%',
            borderRadius: 'inherit',
            width: `${this.starPercentage(ratingsObj, '5')}%`
          }}>
          </div>
        </div>

        {
        ratingsObj['5'] > 0
        ? <div style={{fontSize: '12px', color: 'grey'}}>{ratingsObj['5']}</div>
        : <div style={{fontSize: '12px', color: 'grey'}}>0</div>
        }

      </div>
      <br />

      <div id="starBreakdown" style={starBarFlex}>

      <u style={{fontSize: '12px', color: 'grey'}}>4 stars </u>
      <div style={starBar}>
        <div style={{
          background: 'rgba(51, 170, 51, .8)',
          height: '100%',
          borderRadius: 'inherit',
          width: `${this.starPercentage(ratingsObj, '4')}%`
        }}>
        </div>
      </div>

        {
        ratingsObj['4'] > 0
        ? <div style={{fontSize: '12px', color: 'grey'}}>{ratingsObj['4']}</div>
        : <div style={{fontSize: '12px', color: 'grey'}}>0</div>
        }

      </div>
      <br />

      <div id="starBreakdown" style={starBarFlex}>

      <u style={{fontSize: '12px', color: 'grey'}}>3 stars</u>
      <div style={starBar}>
        <div style={{
          background: 'rgba(51, 170, 51, .8)',
          height: '100%',
          borderRadius: 'inherit',
          width: `${this.starPercentage(ratingsObj, '3')}%`
        }}>
        </div>
      </div>

        {
        ratingsObj['3'] > 0
        ? <div style={{fontSize: '12px', color: 'grey'}}>{ratingsObj['3']}</div>
        : <div style={{fontSize: '12px', color: 'grey'}}>0</div>
        }

      </div>
      <br />

      <div id="starBreakdown" style={starBarFlex}>

      <u style={{fontSize: '12px', color: 'grey'}}>2 stars</u>
      <div style={starBar}>
        <div style={{
          background: 'rgba(51, 170, 51, .8)',
          height: '100%',
          borderRadius: 'inherit',
          width: `${this.starPercentage(ratingsObj, '2')}%`
        }}>
        </div>
      </div>

        {
        ratingsObj['2'] > 0
        ? <div style={{fontSize: '12px', color: 'grey'}}>{ratingsObj['2']}</div>
        : <div style={{fontSize: '12px', color: 'grey'}}>0</div>
        }

      </div>
      <br />

      <div id="starBreakdown" style={starBarFlex}>

      <u style={{fontSize: '12px', color: 'grey'}}>1 star</u>
      <div style={starBar}>
        <div style={{
          background: 'rgba(51, 170, 51, .8)',
          height: '100%',
          borderRadius: 'inherit',
          width: `${this.starPercentage(ratingsObj, '1')}%`
        }}>
        </div>
      </div>

        {
        ratingsObj['1'] > 0
        ? <div style={{fontSize: '12px', color: 'grey'}}>{ratingsObj['1']}</div>
        : <div style={{fontSize: '12px', color: 'grey'}}>0</div>
        }

      </div>

    </div>
  )
}
}

export default ratingsBreakdownList;