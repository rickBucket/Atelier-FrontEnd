import React from 'react';

const gridLayout = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'minwidth(5, 1fr) 100px',
}

class ratingsBreakdownList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ratingsReady: false
    }

    this.totalStars = this.totalStars.bind(this);
    this.sortByStar = this.sortByStar.bind(this);
  }

  totalStars(obj, key){
    var total = 0;
    for (var star in obj) {
      total += Number(obj[star])
    }
    if (isNaN((Number(obj[key])/total).toFixed(2))) {
      return 0
    } else {
      return (Number(obj[key])/total).toFixed(2)
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

      <div id="5" style={{cursor: 'pointer'}} onClick={this.sortByStar}><u>5 stars</u>
      {this.totalStars(ratingsObj, '5')}
      <div>{ratingsObj['5']}</div>
      <img src=""></img>
      </div>

      <div id="starBreakdown"><u>4 stars</u>
      {this.totalStars(ratingsObj, '4')}
      <div>{ratingsObj['4']}</div>
      <img src=""></img>
      </div>

      <div id="starBreakdown"><u>3 stars</u>
      {this.totalStars(ratingsObj, '3')}
      <div>{ratingsObj['3']}</div>
      <img src=""></img>
      </div>

      <div id="starBreakdown"><u>2 stars</u>
      {this.totalStars(ratingsObj, '2')}
      <div>{ratingsObj['2']}</div>
      <img src=""></img>
      </div>

      <div id="starBreakdown"><u>1 star</u>
      {this.totalStars(ratingsObj, '1')}
      <div>{ratingsObj['1']}</div>
      <img src=""></img>
      </div>

    </div>
  )
}
}

export default ratingsBreakdownList;