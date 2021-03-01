import React from 'react';

class WriteReview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviewBody: '',
      reviewSummary: '',
      nickname: '',
      email: ''
    }
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e){
    // console.log('input name', e.target.name);
    // console.log('input value', e.target.value);
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    console.log(this.state)
    return(
      <div style={{
        display: 'grid',
        borderStyle: 'solid',
        borderColor: 'grey',
        borderRadius: '20px',
        padding: '10px',
        height: '400px',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateRows: 'repeat(3, 1fr)',
        justifyContent: 'space-around',
        overflow: 'auto'
      }}>
        <form>

          <div style={{
            borderStyle: 'solid',
            borderRadius: '20px',
            borderWidth: '3px',
            borderColor: 'grey',
            padding: '10px',
          }}>Review
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          </div>

          <div style={{
            borderStyle: 'solid',
            borderRadius: '20px',
            borderWidth: '3px',
            borderColor: 'grey',
            padding: '10px',
          }}>Would you recommend this product?
            <button>Yes</button>
            <button>No</button>
          </div>

          <div style={{
            borderStyle: 'solid',
            borderRadius: '20px',
            borderWidth: '3px',
            borderColor: 'grey',
            padding: '10px',
          }}>Characteristics
          </div>

          <div style={{
            borderStyle: 'solid',
            borderRadius: '20px',
            borderWidth: '3px',
            borderColor: 'grey',
            padding: '10px',
          }}>
          <label for="reviewSummary">Review Summary (optional): </label>
            <input type="text" value={this.state.reviewSummary} name="reviewSummary" onChange={this.onInputChange}></input>
          </div>

          <div style={{
            borderStyle: 'solid',
            borderRadius: '20px',
            borderWidth: '3px',
            borderColor: 'grey',
            padding: '10px',
          }}>
            <label for="reviewBody">Review Body: </label>
            <input type="text" value={this.state.reviewBody} name="reviewBody" onChange={this.onInputChange}></input>
          </div>

          <div style={{
            borderStyle: 'solid',
            borderRadius: '20px',
            borderWidth: '3px',
            borderColor: 'grey',
            padding: '10px',
          }}>Upload photos (optional)
            <button onClick={(e) => e.preventDefault}>Add photos</button>
          </div>

          <div style={{
            borderStyle: 'solid',
            borderRadius: '20px',
            borderWidth: '3px',
            borderColor: 'grey',
            padding: '10px',
          }}>
            <label for="nickname">Nickname: </label>
            <input type="text" name="nickname" value={this.state.nickname} onChange={this.onInputChange}></input>
          </div>

          <div style={{
            borderStyle: 'solid',
            borderRadius: '20px',
            borderWidth: '3px',
            borderColor: 'grey',
            padding: '10px',
          }}>
            <label for="email">Email: </label>
            <input type="text" name="email" value={this.state.email} onChange={this.onInputChange}></input>
          </div>

          <button>Submit Review</button>

        </form>
      </div>
    )
  }
}

export default WriteReview;