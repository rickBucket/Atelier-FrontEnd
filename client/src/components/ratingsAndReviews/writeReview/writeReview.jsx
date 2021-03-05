import React from 'react';
import CharacteristicsRadio from './characteristicsRadio.jsx'

const gridLayout = {
  display: 'grid',
  // boxShadow: '5px 5px 10px grey',
  // borderRadius: '20px',
  padding: '10px',
  // gridGap: '20px',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: 'minwidth(6, 1fr) 200px',
  alignItems: 'center',
  overflow: 'auto',
};

const starStyle = {
  // borderRadius: '20px',
  // boxShadow: '5px 5px 10px grey',
  padding: '10px',
  textAlign: 'center',
  gridColumn: '1',
  gridRow: '2',
};

const recommendStyle = {
  // borderRadius: '20px',
  // boxShadow: '5px 5px 10px grey',
  padding: '10px',
  textAlign: 'center',
  gridColumn: '2',
  gridRow: '2',
};

const characteristicsStyle = {
  // borderRadius: '20px',
  // boxShadow: '5px 5px 10px grey',
  padding: '10px',
  textAlign: 'center',
  gridColumn: '1/-1',
  gridRow: '3'
};

const summaryStyle = {
  // borderRadius: '20px',
  // boxShadow: '5px 5px 10px grey',
  padding: '10px',
  textAlign: 'center',
  gridColumn: '1',
  gridRow: '4',
};

const nameStyle = {
  // borderRadius: '20px',
  // boxShadow: '5px 5px 10px grey',
  padding: '10px',
  textAlign: 'center',
  gridColumn: '2',
  gridRow: '4',
};

const reviewStyle = {
  // borderRadius: '20px',
  // boxShadow: '5px 5px 10px grey',
  padding: '10px',
  textAlign: 'center',
  gridColumn: '1/-1',
  gridRow: '5',
};

const photoStyle = {
  // borderRadius: '20px',
  // boxShadow: '5px 5px 10px grey',
  padding: '10px',
  textAlign: 'center',
  gridColumn: '2',
  gridRow: '6',
};

const emailStyle = {
  // borderRadius: '20px',
  // boxShadow: '5px 5px 10px grey',
  padding: '10px',
  textAlign: 'center',
  gridColumn: '1',
  gridRow: '6',
};

const submitStyle = {
  // borderRadius: '20px',
  // boxShadow: '5px 5px 10px grey',
  padding: '10px',
  gridColumn: '1/-1',
  gridRow: '7',
};

class WriteReview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product_id: this.props.productID,
      body: '',
      summary: '',
      name: '',
      email: '',
      recommend: null,
      rating: null,
      photos: [],
      characteristics: {
      }
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.characteristicsRadioClick = this.characteristicsRadioClick.bind(this);
    this.recommendRadioClick = this.recommendRadioClick.bind(this);
    this.starRadioClick = this.starRadioClick.bind(this);
    this.handleReviewData = this.handleReviewData.bind(this);
  }



  characteristicsRadioClick(e) {
    this.setState({
      characteristics: {
        ...this.state.characteristics,
        [e.target.name]: Number(e.target.value)
      }
    });
  }

  minimumCharCount(){
    if (this.state.body.length >= 50) {
      return `Minimum character count reached`
    } else if (this.state.body.length < 50) {
      return `Minimum required characters left: ${(50 - this.state.body.length)}`
    }
  }

  onInputChange(e){
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  recommendRadioClick(e) {
    this.setState({
      [e.target.name]: Boolean(e.target.value)
    })
  }

  starRadioClick(e) {
    this.setState({
      [e.target.name]: Number(e.target.value)
    })
  }

  handleReviewData(e) {
    //mandatory  fields
    if (this.state.rating === null || this.state.recommend === null || this.props.metaData.characteristics.Comfort.id === null || this.props.metaData.characteristics.Quality.id === null || this.props.metaData.characteristics.Length.id === null || this.props.metaData.characteristics.Fit.id === null) {
      alert(`Please fill out all required (*) fields`);
      e.preventDefault()
      return false
    }
    //body check
    if (this.state.body.length < 50 || this.state.body.length > 1000) {
      alert('Review body must be at least 50 characters');
      e.preventDefault()
      return false
    }
    //email check
    if (!(this.state.email).match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) || this.state.email.length > 60 || this.state.email.length === 0) {
      alert(`Please make sure email is in proper format ex. 'hello@hello.com`);
      e.preventDefault()
      return false
    }
    //summary check
    if (this.state.summary.length > 60) {
      alert(`Summary must be 60 characters or less`)
      e.preventDefault()
      return false
    }
    //name check
    if (this.state.name.length > 60 || this.state.name.length === 0) {
      alert(`Name must be filled in and 60 characters or less`)
      e.preventDefault()
      return false
    }

    alert('Your review has been submitted!')
    this.props.handleReviewData(this.state)
  }

  render() {
    return(
      <div >
        <form onSubmit={this.handleReviewData} id="reviewForm" style={gridLayout}>
        <div style={{
          gridColumn: '1/-1',
          gridRow: '1'
        }}>
          <h1 style={{textAlign: 'center'}}>Tell us about this product!</h1>
          <small>* Required fields</small>
        </div>
          <div style={starStyle}>
          <div>
              <b>* Overall</b>
              <br />
              <input type="radio" id="star1" name="rating" value="1" onClick={this.starRadioClick}></input>
              <label for="star1"><span className="fa fa-star">1</span></label>
              <input type="radio" id="star2" name="rating" value="2" onClick={this.starRadioClick}></input>
              <label for="star2"><span className="fa fa-star">2</span></label>
              <input type="radio" id="star3" name="rating" value="3" onClick={this.starRadioClick}></input>
              <label for="star3"><span className="fa fa-star">3</span></label>
              <input type="radio" id="star4" name="rating" value="4" onClick={this.starRadioClick}></input>
              <label for="star4"><span className="fa fa-star">4</span></label>
              <input type="radio" id="star5" name="rating" value="5" onClick={this.starRadioClick}></input>
              <label for="star5"><span className="fa fa-star">5</span></label>
              <br />
              <small>
                1 - Poor
                2 - Fair
                3 - Average
                4 - Good
                5 - Great
              </small>

            </div>
          </div>

          <div style={recommendStyle}>
            <b>* Would you recommend this product?</b>
            <div>
              <input type="radio" id="yes" name="recommend" value={true} onClick={this.recommendRadioClick}></input>
              <label for="yes">Yes</label>
              <input type="radio" id="no" name="recommend" value={false} onClick={this.recommendRadioClick}></input>
              <label for="no">No</label>
            </div>
          </div>



          <div style={characteristicsStyle}><b>* Characteristics</b>
            {
              this.props.metaData.characteristics.Size &&
            <div>
              <b>Size</b>
              <br />
              <input type="radio" id="size1" name={this.props.metaData.characteristics.Size.id} value="1" onClick={this.characteristicsRadioClick}></input>
              <label for="size1">A size too small</label>
              <input type="radio" id="size2" name={this.props.metaData.characteristics.Size.id} value="2" onClick={this.characteristicsRadioClick}></input>
              <label for="size2">½ a size too small</label>
              <input type="radio" id="size3" name={this.props.metaData.characteristics.Size.id} value="3" onClick={this.characteristicsRadioClick}></input>
              <label for="size3">Perfect</label>
              <input type="radio" id="size4" name={this.props.metaData.characteristics.Size.id} value="4" onClick={this.characteristicsRadioClick}></input>
              <label for="size4">½ a size too big</label>
              <input type="radio" id="size5" name={this.props.metaData.characteristics.Size.id} value="5" onClick={this.characteristicsRadioClick}></input>
              <label for="size5">A size too wide</label>
            </div>
            }
            <br />
            {
              this.props.metaData.characteristics.Width &&
            <div>
              <b>Width</b>
              <br />
              <input type="radio" id="width1" name={this.props.metaData.characteristics.Width.id} value="1" onClick={this.characteristicsRadioClick}></input>
              <label for="width1">Too narrow</label>
              <input type="radio" id="width2" name={this.props.metaData.characteristics.Width.id} value="2" onClick={this.characteristicsRadioClick}></input>
              <label for="width2">Slightly narrow</label>
              <input type="radio" id="width3" name={this.props.metaData.characteristics.Width.id} value="3" onClick={this.characteristicsRadioClick}></input>
              <label for="width3">Perfect</label>
              <input type="radio" id="width4" name={this.props.metaData.characteristics.Width.id} value="4" onClick={this.characteristicsRadioClick}></input>
              <label for="width4">Slightly wide</label>
              <input type="radio" id="width5" name={this.props.metaData.characteristics.Width.id} value="5" onClick={this.characteristicsRadioClick}></input>
              <label for="width5">Too wide</label>
            </div>
            }
            <br />
            {
              this.props.metaData.characteristics.Comfort &&
            <div>
              <b>Comfort</b>
              <br />
              <input type="radio" id="comfort1" name={this.props.metaData.characteristics.Comfort.id} value="1" onClick={this.characteristicsRadioClick}></input>
              <label for="comfort1">Uncomfortable</label>
              <input type="radio" id="comfort2" name={this.props.metaData.characteristics.Comfort.id} value="2" onClick={this.characteristicsRadioClick}></input>
              <label for="comfort2">Slightly uncomfortable</label>
              <input type="radio" id="comfort3" name={this.props.metaData.characteristics.Comfort.id} value="3" onClick={this.characteristicsRadioClick}></input>
              <label for="comfort3">Ok</label>
              <input type="radio" id="comfort4" name={this.props.metaData.characteristics.Comfort.id} value="4" onClick={this.characteristicsRadioClick}></input>
              <label for="comfort4">Comfortable</label>
              <input type="radio" id="comfort5" name={this.props.metaData.characteristics.Comfort.id} value="5" onClick={this.characteristicsRadioClick}></input>
              <label for="comfort5">Perfect</label>
            </div>
            }
            <br />
            {
              this.props.metaData.characteristics.Quality &&
            <div>
              <b>Quality</b>
              <br />
              <input type="radio" id="quality1" name={this.props.metaData.characteristics.Quality.id} value="1" onClick={this.characteristicsRadioClick}></input>
              <label for="quality1">Poor</label>
              <input type="radio" id="quality2" name={this.props.metaData.characteristics.Quality.id} value="2" onClick={this.characteristicsRadioClick}></input>
              <label for="quality2">Below average</label>
              <input type="radio" id="quality3" name={this.props.metaData.characteristics.Quality.id} value="3" onClick={this.characteristicsRadioClick}></input>
              <label for="quality3">What I expected</label>
              <input type="radio" id="quality4" name={this.props.metaData.characteristics.Quality.id} value="4" onClick={this.characteristicsRadioClick}></input>
              <label for="quality4">Pretty great</label>
              <input type="radio" id="quality5" name={this.props.metaData.characteristics.Quality.id} value="5" onClick={this.characteristicsRadioClick}></input>
              <label for="quality5">Perfect</label>
            </div>
            }
            <br />
            {
            this.props.metaData.characteristics.Length &&
            <div>
              <b>Length</b>
              <br />
              <input type="radio" id="length1" name={this.props.metaData.characteristics.Length.id} value="1" onClick={this.characteristicsRadioClick}></input>
              <label for="length1">Runs short</label>
              <input type="radio" id="length2" name={this.props.metaData.characteristics.Length.id} value="2" onClick={this.characteristicsRadioClick}></input>
              <label for="length2">Runs slightly short</label>
              <input type="radio" id="length3" name={this.props.metaData.characteristics.Length.id} value="3" onClick={this.characteristicsRadioClick}></input>
              <label for="length3">Perfect</label>
              <input type="radio" id="length4" name={this.props.metaData.characteristics.Length.id} value="4" onClick={this.characteristicsRadioClick}></input>
              <label for="length4">Runs slightly long</label>
              <input type="radio" id="length5" name={this.props.metaData.characteristics.Length.id} value="5" onClick={this.characteristicsRadioClick}></input>
              <label for="length5">Runs long</label>
            </div>
            }
            <br />
            {
            this.props.metaData.characteristics.Fit &&
            <div>
              <b>Fit</b>
              <br />
              <input type="radio" id="fit1" name={this.props.metaData.characteristics.Fit.id} value="1" onClick={this.characteristicsRadioClick}></input>
              <label for="fit1">Runs tight</label>
              <input type="radio" id="fit2" name={this.props.metaData.characteristics.Fit.id} value="2" onClick={this.characteristicsRadioClick}></input>
              <label for="fit2">Runs slightly tight</label>
              <input type="radio" id="fit3" name={this.props.metaData.characteristics.Fit.id} value="3" onClick={this.characteristicsRadioClick}></input>
              <label for="fit3">Perfect</label>
              <input type="radio" id="fit4" name={this.props.metaData.characteristics.Fit.id} value="4" onClick={this.characteristicsRadioClick}></input>
              <label for="fit4">Runs slightly long</label>
              <input type="radio" id="fit5" name={this.props.metaData.characteristics.Fit.id} value="5" onClick={this.characteristicsRadioClick}></input>
              <label for="fit5">Runs long</label>
            </div>
            }
          </div>


          <div style={summaryStyle}>
          <label for="summary">Review Summary (optional): </label>
            <input type="text" value={this.state.summary} style={{width : '90%'}} name="summary" onChange={this.onInputChange} placeholder="Example: Best purchase ever!"></input>
          </div>

          <div style={nameStyle}>
            <label for="name"><b>* Your Name: </b></label>
            <input type="text" name="name" style={{width : '90%'}} value={this.state.name} onChange={this.onInputChange} placeholder="Example: jackson11!"></input>
            <br />
            <small><i>For privacy reasons, do not use your full name or email address.</i></small>
          </div>

          <div style={reviewStyle}>
            <label for="body"><b>* Your Review: </b></label>
            <input type="text" style={{width : '90%'}} value={this.state.body} name="body" onChange={this.onInputChange} placeholder="What did you like/dislike about the product?"></input>
            <br />
            <small>{this.minimumCharCount()}</small>
          </div>

          <div style={photoStyle}>Upload photos (optional)
            <button onClick={(e) => e.preventDefault}>Add photos</button>
          </div>

          <div style={emailStyle}>
            <label for="email"><b>* Email: </b></label>
            <input type="text" style={{width : '90%'}} name="email" value={this.state.email} onChange={this.onInputChange} placeholder="Example: jackson11@email.com"></input>
            <br />
            <small><i>For authentication reasons, you will not be emailed.</i></small>
          </div>

          <button id="submitReview" style={submitStyle} onClick={this.handleReviewData}><b>Submit Review</b></button>

        </form>
      </div>
    )
  }
}

export default WriteReview;