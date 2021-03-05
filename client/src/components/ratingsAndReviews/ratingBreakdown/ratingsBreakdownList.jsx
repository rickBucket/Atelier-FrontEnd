import React from 'react';

const gridLayout = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'minwidth(5, 1fr) 100px',
}

const starBar = {
  position: 'relative',
  height: '10px',
  margin: '15px',
  width: '100px',
  border: 'none',
  backgroundColor: 'rgba(232, 232, 232, .8)',
  boxShadow: '2px 2px 4px gold'
}

const starBarFlex = {
  display: 'flex',
  wrap: 'wrap',
  padding: '3px',
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
  console.log(this.starPercentage(ratingsObj, '5'))

  return(
    <div style={gridLayout}>

      <div id="5" style={starBarFlex} onClick={this.sortByStar}>

        <small><u>5 stars</u></small>
        <div style={starBar}>
          <div style={{
            background: 'rgba(51, 170, 51, .8)',
            height: '100%',
            borderRadius: 'inherit',
            width: `${this.starPercentage(ratingsObj, '5')}%`
          }}>
          </div>
        </div>
        <small>{ratingsObj['5']} votes</small>

      </div>
      <br />

      <div id="starBreakdown" style={starBarFlex}>

      <small><u>4 stars </u></small>
      <div style={starBar}>
        <div style={{
          background: 'rgba(51, 170, 51, .8)',
          height: '100%',
          borderRadius: 'inherit',
          width: `${this.starPercentage(ratingsObj, '4')}%`
        }}>
        </div>
      </div>
      <small> {ratingsObj['4']} votes</small>

      </div>
      <br />

      <div id="starBreakdown" style={starBarFlex}>

      <small><u>3 stars</u></small>
      <div style={starBar}>
        <div style={{
          background: 'rgba(51, 170, 51, .8)',
          height: '100%',
          borderRadius: 'inherit',
          width: `${this.starPercentage(ratingsObj, '3')}%`
        }}>
        </div>
      </div>
      <small>{ratingsObj['3']} votes</small>

      </div>
      <br />

      <div id="starBreakdown" style={starBarFlex}>

      <small><u>2 stars</u></small>
      <div style={starBar}>
        <div style={{
          background: 'rgba(51, 170, 51, .8)',
          height: '100%',
          borderRadius: 'inherit',
          width: `${this.starPercentage(ratingsObj, '2')}%`
        }}>
        </div>
      </div>
      <small>{ratingsObj['2']} votes</small>

      </div>
      <br />

      <div id="starBreakdown" style={starBarFlex}>

      <small><u>1 star</u></small>
      <div style={starBar}>
        <div style={{
          background: 'rgba(51, 170, 51, .8)',
          height: '100%',
          borderRadius: 'inherit',
          width: `${this.starPercentage(ratingsObj, '1')}%`
        }}>
        </div>
      </div>
      <small>{ratingsObj['1']} votes</small>

      </div>

    </div>
  )
}
}

export default ratingsBreakdownList;