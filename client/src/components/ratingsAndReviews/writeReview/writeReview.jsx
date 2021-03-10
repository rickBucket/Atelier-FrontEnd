/* eslint-disable max-len */
import React from 'react';
import CharacteristicsRadio from './characteristicsRadio.jsx';
import DynamicStarReview from './dynamicStarReview.jsx';
// import HandleReviewData from './handleReviewData.jsx';

const gridLayout = {
  display: 'grid',
  padding: '10px',
  gridGap: '5px',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: 'minwidth(6, 1fr) 200px',
  alignItems: 'center',
  overflow: 'auto',
};

const starStyle = {
  fontSize: '12px',
  textAlign: 'center',
  padding: '3px',
  gridColumn: '1',
  gridRow: '2',
};

const recommendStyle = {
  fontSize: '12px',
  textAlign: 'center',
  padding: '3px',
  gridColumn: '2',
  gridRow: '2',
};

const characteristicsStyle = {
  fontSize: '12px',
  textAlign: 'center',
  width: '80%',
  margin: 'auto',
  marginBottom: '15px',
  padding: '3px',
  gridColumn: '1/-1',
  gridRow: '3',
};

const summaryStyle = {
  fontSize: '12px',
  textAlign: 'center',
  padding: '3px',
  gridColumn: '1',
  gridRow: '4',
};

const nameStyle = {
  fontSize: '12px',
  textAlign: 'center',
  padding: '3px',
  gridColumn: '2',
  gridRow: '4',
};

const reviewStyle = {
  fontSize: '12px',
  textAlign: 'center',
  padding: '3px',
  gridColumn: '1/-1',
  gridRow: '5',
};

const photoStyle = {
  fontSize: '12px',
  textAlign: 'center',
  padding: '3px',
  gridColumn: '2',
  gridRow: '6',
};

const emailStyle = {
  fontSize: '12px',
  textAlign: 'center',
  padding: '3px',
  gridColumn: '1',
  gridRow: '6',
};

const submitStyle = {
  border: '1px solid grey',
  boxShadow: '2px 2px 4px grey',
  backgroundColor: 'white',
  fontFamily: 'Open Sans',
  width: '300px',
  margin: 'auto',
  padding: '10px',
  gridColumn: '1/-1',
  gridRow: '7',
};

class WriteReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseOver: [0, 0, 0, 0, 0],
      product_id: this.props.productID,
      body: '',
      summary: '',
      name: '',
      email: '',
      recommend: null,
      rating: null,
      photos: [],
      characteristics: {
      },
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.characteristicsRadioClick = this.characteristicsRadioClick.bind(this);
    this.recommendRadioClick = this.recommendRadioClick.bind(this);
    this.starRadioClick = this.starRadioClick.bind(this);
    this.HandleReviewData = this.HandleReviewData.bind(this);
    // this.DynamicStarReview = DynamicStarReview.bind(this);
  }

  characteristicsRadioClick(e) {
    this.setState({
      characteristics: {
        ...this.state.characteristics,
        [e.target.name]: Number(e.target.value),
      },
    });
  }

  minimumCharCount() {
    if (this.state.body.length >= 50) {
      return 'Minimum character count reached';
    } if (this.state.body.length < 50) {
      return `Minimum required characters left: ${(50 - this.state.body.length)}`;
    }
  }

  onInputChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  recommendRadioClick(e) {
    this.setState({
      [e.target.name]: Boolean(e.target.value),
    });
  }

  starRadioClick(e) {
    this.setState({
      [e.target.name]: Number(e.target.value),
    });
  }

  HandleReviewData(e) {
    // mandatory  fields
    if (this.state.rating === null || this.state.recommend === null || this.props.metaData.characteristics.Comfort.id === null || this.props.metaData.characteristics.Quality.id === null || this.props.metaData.characteristics.Length.id === null || this.props.metaData.characteristics.Fit.id === null) {
      alert('Please fill out all required (*) fields');
      e.preventDefault();
      return false;
    }
    // body check
    if (this.state.body.length < 50 || this.state.body.length > 1000) {
      alert('Review body must be at least 50 characters');
      e.preventDefault();
      return false;
    }
    // email check
    if (!(this.state.email).match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) || this.state.email.length > 60 || this.state.email.length === 0) {
      alert('Please make sure email is in proper format ex. \'hello@hello.com');
      e.preventDefault();
      return false;
    }
    // summary check
    if (this.state.summary.length > 60) {
      alert('Summary must be 60 characters or less');
      e.preventDefault();
      return false;
    }
    // name check
    if (this.state.name.length > 60 || this.state.name.length === 0) {
      alert('Name must be filled in and 60 characters or less');
      e.preventDefault();
      return false;
    }
    console.log('i made it!');

    alert('Your review has been submitted!');
    this.props.handleReviewData(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.HandleReviewData} id="reviewForm" style={gridLayout}>
          <div style={{
            gridColumn: '1/-1',
            gridRow: '1',
          }}
          >
            <h1 style={{ textAlign: 'center' }}>Tell us about this product!</h1>
            <small>* Required fields</small>
          </div>
          <div style={starStyle}>

            <b>* Overall</b>

            <div style={{
              display: 'flex', justifyContent: 'center', fontSize: '20px', marginTop: '5px', marginBottom: '5px',
            }}
            >
              {
               this.state.mouseOver[0] === 1
                 ? <span className="fa fa-star" onMouseEnter={() => { this.setState({ mouseOver: [1, 0, 0, 0, 0] }); }} onClick={() => { this.setState({ rating: 1, mouseOver: [1, 0, 0, 0, 0] }); }} />
                 : <span className="fa fa-star-o" onMouseEnter={() => { this.setState({ mouseOver: [1, 0, 0, 0, 0] }); }} />
             }
              {
             this.state.mouseOver[1] === 1
               ? <span className="fa fa-star" onMouseEnter={() => { this.setState({ mouseOver: [1, 1, 0, 0, 0] }); }} onClick={() => { this.setState({ rating: 2, mouseOver: [1, 1, 0, 0, 0] }); }} />
               : <span className="fa fa-star-o" onMouseEnter={() => { this.setState({ mouseOver: [1, 1, 0, 0, 0] }); }} />
             }
              {
             this.state.mouseOver[2] === 1
               ? <span className="fa fa-star" onMouseEnter={() => { this.setState({ mouseOver: [1, 1, 1, 0, 0] }); }} onClick={() => { this.setState({ rating: 3, mouseOver: [1, 1, 1, 0, 0] }); }} />
               : <span className="fa fa-star-o" onMouseEnter={() => { this.setState({ mouseOver: [1, 1, 1, 0, 0] }); }} />
             }
              {
             this.state.mouseOver[3] === 1
               ? <span className="fa fa-star" onMouseEnter={() => { this.setState({ mouseOver: [1, 1, 1, 1, 0] }); }} onClick={() => { this.setState({ rating: 4, mouseOver: [1, 1, 1, 1, 0] }); }} />
               : <span className="fa fa-star-o" onMouseEnter={() => { this.setState({ mouseOver: [1, 1, 1, 1, 0] }); }} />
             }
              {
             this.state.mouseOver[4] === 1
               ? <span className="fa fa-star" onClick={() => { this.setState({ rating: 5, mouseOver: [1, 1, 1, 1, 1] }); }} />
               : <span className="fa fa-star-o" onMouseEnter={() => { this.setState({ mouseOver: [1, 1, 1, 1, 1] }); }} />
             }
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ display: 'flex', margin: 'auto' }}>
                1 - Poor
              </div>
              <div style={{ display: 'flex', margin: 'auto' }}>
                2 - Fair
              </div>
              <div style={{ display: 'flex', margin: 'auto' }}>
                3 - Average
              </div>
              <div style={{ display: 'flex', margin: 'auto' }}>
                4 - Good
              </div>
              <div style={{ display: 'flex', margin: 'auto' }}>
                5 - Great
              </div>
            </div>
          </div>

          <div style={recommendStyle}>
            <b>* Would you recommend this product?</b>
            <div>
              <input type="radio" id="yes" name="recommend" value onClick={this.recommendRadioClick} />
              <label htmlFor="yes">Yes</label>
              <input type="radio" id="no" name="recommend" value={false} onClick={this.recommendRadioClick} />
              <label htmlFor="no">No</label>
            </div>
          </div>

          <div style={characteristicsStyle}>
            <CharacteristicsRadio metaData={this.props.metaData} characteristicsRadioClick={this.characteristicsRadioClick} />
          </div>

          <div style={summaryStyle}>
            <label htmlFor="summary">Review Summary (optional): </label>
            <textarea
              id="summaryInput"
              type="text"
              value={this.state.summary}
              style={{
                width: '90%', height: '60px', border: '1px solid grey', fontFamily: 'Open sans', resize: 'none',
              }}
              name="summary"
              onChange={this.onInputChange}
              placeholder="Example: Best purchase ever!"
            />
          </div>

          <div style={nameStyle}>
            <label htmlFor="name"><b>* Your Name: </b></label>
            <input
              type="text"
              name="name"
              style={{
                width: '90%', height: '30px', fontFamily: 'Open sans', border: '1px solid grey',
              }}
              value={this.state.name}
              onChange={this.onInputChange}
              placeholder="Example: jackson11!"
            />
            <br />
            <small><i>For privacy reasons, do not use your full name or email address.</i></small>
          </div>

          <div style={reviewStyle}>
            <label htmlFor="body"><b>* Your Review: </b></label>
            <textarea
              type="text"
              style={{
                width: '95%', height: '80px', border: '1px solid grey', fontFamily: 'Open sans', resize: 'none',
              }}
              value={this.state.body}
              name="body"
              onChange={this.onInputChange}
              placeholder="What did you like/dislike about the product?"
            />
            <br />
            <small>{this.minimumCharCount()}</small>
          </div>

          <div style={photoStyle}>
            Upload photos (optional)
            <button onClick={(e) => e.preventDefault}>Add photos</button>
          </div>

          <div style={emailStyle}>
            <label htmlFor="email"><b>* Email: </b></label>
            <input
              type="text"
              style={{
                width: '90%', height: '30px', fontFamily: 'Open sans', border: '1px solid grey',
              }}
              name="email"
              value={this.state.email}
              onChange={this.onInputChange}
              placeholder="Example: jackson11@email.com"
            />
            <br />
            <small><i>For authentication reasons, you will not be emailed.</i></small>
          </div>

          <button id="submitReview" style={submitStyle} onClick={this.handleReviewData}><b>Submit Review</b></button>

        </form>
      </div>
    );
  }
}

export default WriteReview;
