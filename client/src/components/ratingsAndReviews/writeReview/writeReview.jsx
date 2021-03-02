import React from 'react';

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
        //[this.props.metaData.characteristics.Size.id]: null,
        //[this.props.metaData.characteristics.Width.id]: null,
        [this.props.metaData.characteristics.Comfort.id]: null,
        [this.props.metaData.characteristics.Quality.id]: null,
        [this.props.metaData.characteristics.Length.id]: null,
        [this.props.metaData.characteristics.Fit.id]: null,
      }
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.characteristicsRadioClick = this.characteristicsRadioClick.bind(this);
    this.recommendRadioClick = this.recommendRadioClick.bind(this);
    this.starRadioClick = this.starRadioClick.bind(this);
    this.handleReviewData =this.handleReviewData.bind(this);
  }

  onInputChange(e){
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  characteristicsRadioClick(e) {
    this.setState({
      characteristics: {
        ...this.state.characteristics,
        [e.target.name]: Number(e.target.value)
      }
    });
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
    //send review data to ratingsApp
    console.log('state', this.state)
    this.props.handleReviewData(this.state)
  }

  render() {
    return(
      <div style={{
        display: 'grid',
        borderStyle: 'solid',
        borderColor: 'grey',
        borderRadius: '20px',
        padding: '10px',
        gridGap: '20px',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateRows: 'minwidth(5, 1fr) 200px',
        overflow: 'auto'
      }}>
        {/* <form> */}
          <div style={{
            borderStyle: 'solid',
            borderRadius: '20px',
            borderWidth: '3px',
            borderColor: 'grey',
            padding: '10px',
            alignContent: 'center',
            gridColumn: '1',
            gridRow: '1'
          }}>
          <div>
              <b>Size</b>
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
            </div>
          </div>

          <div style={{
            borderStyle: 'solid',
            borderRadius: '20px',
            borderWidth: '3px',
            borderColor: 'grey',
            padding: '10px',
            gridColumn: '2',
            gridRow: '1',
          }}>
            <b>Would you recommend this product?</b>
            <div>
              <input type="radio" id="yes" name="recommend" value={true} onClick={this.recommendRadioClick}></input>
              <label for="yes">Yes</label>
              <input type="radio" id="no" name="recommend" value={false} onClick={this.recommendRadioClick}></input>
              <label for="no">No</label>
            </div>
          </div>

          <div style={{
            borderStyle: 'solid',
            borderRadius: '20px',
            borderWidth: '3px',
            borderColor: 'grey',
            padding: '10px',
            gridColumn: '1/-1',
            gridRow: '2'
          }}>Characteristics
            {/* <div>
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
            <br />
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
            <br /> */}
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
            <br />
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
            <br />
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
            <br />
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
          </div>


          <div style={{
            borderStyle: 'solid',
            borderRadius: '20px',
            borderWidth: '3px',
            borderColor: 'grey',
            padding: '10px',
            gridRow: '3',
            gridColumn: '1'
          }}>
          <label for="summary">Review Summary (optional): </label>
            <input type="text" value={this.state.summary} name="summary" onChange={this.onInputChange}></input>
          </div>

          <div style={{
            borderStyle: 'solid',
            borderRadius: '20px',
            borderWidth: '3px',
            borderColor: 'grey',
            padding: '10px',
            gridRow: '3',
            gridColumn: '2'
          }}>
            <label for="name">Your name: </label>
            <input type="text" name="name" value={this.state.name} onChange={this.onInputChange}></input>
          </div>

          <div style={{
            borderStyle: 'solid',
            borderRadius: '20px',
            borderWidth: '3px',
            borderColor: 'grey',
            padding: '10px',
            gridRow: '4',
            gridColumn: '1/-1'
          }}>
            <label for="body">Your Review: </label>
            <input type="text" value={this.state.body} name="body" onChange={this.onInputChange}></input>
          </div>

          <div style={{
            borderStyle: 'solid',
            borderRadius: '20px',
            borderWidth: '3px',
            borderColor: 'grey',
            padding: '10px',
            gridRow: '5',
            gridColumn: '2'
          }}>Upload photos (optional)
            <button onClick={(e) => e.preventDefault}>Add photos</button>
          </div>

          <div style={{
            borderStyle: 'solid',
            borderRadius: '20px',
            borderWidth: '3px',
            borderColor: 'grey',
            padding: '10px',
            gridRow: '5',
            gridColumn: '1'
          }}>
            <label for="email">Email: </label>
            <input type="text" name="email" value={this.state.email} onChange={this.onInputChange}></input>
          </div>

          <button style={{
            borderStyle: 'solid',
            borderRadius: '20px',
            borderWidth: '3px',
            borderColor: 'grey',
            padding: '10px',
            gridRow: '6',
            gridColumn: '1/-1'
          }} onClick={this.handleReviewData}>Submit Review</button>

        {/* </form> */}
      </div>
    )
  }
}

export default WriteReview;