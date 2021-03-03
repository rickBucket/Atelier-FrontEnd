import React from 'react';

class ratingsBreakdownList extends React.Component {
  constructor(props) {
    super(props)

    // this.ratingsObj = this.props.metaData.ratings;
    this.totalStars = this.totalStars.bind(this);
  }

  totalStars(obj, key){
    var total = 0;
    for (var star in obj) {
      total += Number(obj[star])
    }
    console.log(obj)
   return Number(obj[key])/total
  }

render() {
  console.log(this.props.metaData)
  const ratingsObj = this.props.metaData.ratings;

  return(
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'minwidth(5, 1fr) 100px',
    }}>
      <div><u>5 stars</u>
      {/* {this.totalStars(this.props.metaData.ratings, '5')} */}
      <img src=""></img>
      </div>
      <div><u>4 stars</u>
      <img src=""></img>
      </div>
      <div><u>3 stars</u>
      <img src=""></img>
      </div>
      <div><u>2 stars</u>
      <img src=""></img>
      </div>
      <div><u>1 star</u>
      <img src=""></img>
      </div>
    </div>
  )
}
}

export default ratingsBreakdownList;