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

      }}>Rating Breakdown Component
      <div>
        stars
      </div>
      <div>
        
      </div>
        <h1>3.5</h1>
      </div>
    )
  }
}

export default RatingBreakdown