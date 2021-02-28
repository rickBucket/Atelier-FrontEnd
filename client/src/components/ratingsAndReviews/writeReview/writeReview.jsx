import React from 'react';

///////This will be a button, when clicked, opens up a write review form

class WriteReview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      writeReview: false
    }
    this.writeClick = this.writeClick.bind(this);
    this.cancelWriteClick = this.cancelWriteClick.bind(this);
  }

  writeClick(e){
    this.setState({
      writeReview: true
    })
  }

  cancelWriteClick(e){
    this.setState({
      writeReview: false
    })
  }

  render() {
    var writeReview = this.state.writeReview
    if (!writeReview) {
      return(
        <div>Write Review Component
          <div onClick={this.writeClick}>Write Review (click me to change state)</div>
        </div>
      )
    }
    if (writeReview) {
      return(
        <div onClick={this.cancelWriteClick}>
          Time to write (click me to change state)
        </div>
      )
    }
  }
}

export default WriteReview