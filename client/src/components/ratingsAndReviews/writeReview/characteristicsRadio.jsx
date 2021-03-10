import React from 'react';
/* eslint-disable */

class CharacteristicsRadio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <b>*Characteristics</b>
        {
              this.props.metaData.characteristics.Size
            && (
            <div>
              <b>Size</b>
              <br />
              <input type="radio" id="size1" name={this.props.metaData.characteristics.Size.id} value="1" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="size1">A size too small</label>
              <input type="radio" id="size2" name={this.props.metaData.characteristics.Size.id} value="2" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="size2">½ a size too small</label>
              <input type="radio" id="size3" name={this.props.metaData.characteristics.Size.id} value="3" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="size3">Perfect</label>
              <input type="radio" id="size4" name={this.props.metaData.characteristics.Size.id} value="4" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="size4">½ a size too big</label>
              <input type="radio" id="size5" name={this.props.metaData.characteristics.Size.id} value="5" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="size5">A size too wide</label>
            </div>
            )
            }
        <br />
        {
              this.props.metaData.characteristics.Width
            && (
            <div>
              <b>Width</b>
              <br />
              <input type="radio" id="width1" name={this.props.metaData.characteristics.Width.id} value="1" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="width1">Too narrow</label>
              <input type="radio" id="width2" name={this.props.metaData.characteristics.Width.id} value="2" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="width2">Slightly narrow</label>
              <input type="radio" id="width3" name={this.props.metaData.characteristics.Width.id} value="3" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="width3">Perfect</label>
              <input type="radio" id="width4" name={this.props.metaData.characteristics.Width.id} value="4" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="width4">Slightly wide</label>
              <input type="radio" id="width5" name={this.props.metaData.characteristics.Width.id} value="5" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="width5">Too wide</label>
            </div>
            )
            }
        <br />
        {
              this.props.metaData.characteristics.Comfort
            && (
            <div>
              <b>Comfort</b>
              <br />

              <input type="radio" id="comfort1" name={this.props.metaData.characteristics.Comfort.id} value="1" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="comfort1">Uncomfortable</label>

              <input type="radio" id="comfort2" name={this.props.metaData.characteristics.Comfort.id} value="2" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="comfort2">Slightly uncomfortable</label>
              <input type="radio" id="comfort3" name={this.props.metaData.characteristics.Comfort.id} value="3" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="comfort3">Ok</label>
              <input type="radio" id="comfort4" name={this.props.metaData.characteristics.Comfort.id} value="4" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="comfort4">Comfortable</label>
              <input type="radio" id="comfort5" name={this.props.metaData.characteristics.Comfort.id} value="5" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="comfort5">Perfect</label>
            </div>
            )
            }
        <br />
        {
              this.props.metaData.characteristics.Quality
            && (
            <div>
              <b>Quality</b>
              <br />
              <input type="radio" id="quality1" name={this.props.metaData.characteristics.Quality.id} value="1" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="quality1">Poor</label>
              <input type="radio" id="quality2" name={this.props.metaData.characteristics.Quality.id} value="2" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="quality2">Below average</label>
              <input type="radio" id="quality3" name={this.props.metaData.characteristics.Quality.id} value="3" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="quality3">What I expected</label>
              <input type="radio" id="quality4" name={this.props.metaData.characteristics.Quality.id} value="4" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="quality4">Pretty great</label>
              <input type="radio" id="quality5" name={this.props.metaData.characteristics.Quality.id} value="5" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="quality5">Perfect</label>
            </div>
            )
            }
        <br />
        {
            this.props.metaData.characteristics.Length
            && (
            <div>
              <b>Length</b>
              <br />
              <input type="radio" id="length1" name={this.props.metaData.characteristics.Length.id} value="1" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="length1">Runs short</label>
              <input type="radio" id="length2" name={this.props.metaData.characteristics.Length.id} value="2" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="length2">Runs slightly short</label>
              <input type="radio" id="length3" name={this.props.metaData.characteristics.Length.id} value="3" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="length3">Perfect</label>
              <input type="radio" id="length4" name={this.props.metaData.characteristics.Length.id} value="4" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="length4">Runs slightly long</label>
              <input type="radio" id="length5" name={this.props.metaData.characteristics.Length.id} value="5" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="length5">Runs long</label>
            </div>
            )
            }
        <br />
        {
            this.props.metaData.characteristics.Fit
            && (
            <div>
              <b>Fit</b>
              <br />
              <input type="radio" id="fit1" name={this.props.metaData.characteristics.Fit.id} value="1" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="fit1">Runs tight</label>
              <input type="radio" id="fit2" name={this.props.metaData.characteristics.Fit.id} value="2" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="fit2">Runs slightly tight</label>
              <input type="radio" id="fit3" name={this.props.metaData.characteristics.Fit.id} value="3" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="fit3">Perfect</label>
              <input type="radio" id="fit4" name={this.props.metaData.characteristics.Fit.id} value="4" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="fit4">Runs slightly long</label>
              <input type="radio" id="fit5" name={this.props.metaData.characteristics.Fit.id} value="5" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="fit5">Runs long</label>
            </div>
            )
            }
      </div>
    );
  }
}

export default CharacteristicsRadio;
