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
              <div style={{fontSize: '16px', marginBottom: '5px', fontWeight: 'bold'}}>Size</div>


              <div style={{display: 'flex', justifyContent: 'space-evenly'}}>

              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <input type="radio" id="size1" name={this.props.metaData.characteristics.Size.id} value="1" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="size1" style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>A size too small</label>
              </div>

              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <input type="radio" id="size2" name={this.props.metaData.characteristics.Size.id} value="2" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="size2" style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>½ a size too small</label>
              </div>

              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <input type="radio" id="size3" name={this.props.metaData.characteristics.Size.id} value="3" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="size3" style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>Perfect</label>
              </div>

              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <input type="radio" id="size4" name={this.props.metaData.characteristics.Size.id} value="4" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="size4" style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>½ a size too big</label>
              </div>

              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <input type="radio" id="size5" name={this.props.metaData.characteristics.Size.id} value="5" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="size5" style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>A size too wide</label>
              </div>
              </div>
            </div>
            )
            }
        <br />
        {
              this.props.metaData.characteristics.Width
            && (
            <div>
              <div style={{fontSize: '16px', marginBottom: '5px', fontWeight: 'bold'}}>Width</div>


              <div style={{display: 'flex', justifyContent: 'space-evenly'}}>

               <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <input type="radio" id="width1" name={this.props.metaData.characteristics.Width.id} value="1" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="width1" style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>Too narrow</label>
              </div>

              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <input type="radio" id="width2" name={this.props.metaData.characteristics.Width.id} value="2" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="width2" style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>Slightly narrow</label>
              </div>

              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <input type="radio" id="width3" name={this.props.metaData.characteristics.Width.id} value="3" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="width3" style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>Perfect</label>
              </div>

              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <input type="radio" id="width4" name={this.props.metaData.characteristics.Width.id} value="4" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="width4" style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>Slightly wide</label>
              </div>

              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <input type="radio" id="width5" name={this.props.metaData.characteristics.Width.id} value="5" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="width5" style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>Too wide</label>
              </div>
             </div>
            </div>
            )
            }
        <br />
        {
              this.props.metaData.characteristics.Comfort
            && (
            <div>
              <div style={{fontSize: '16px', marginBottom: '5px', fontWeight: 'bold'}}>Comfort</div>

<div style={{display: 'flex', justifyContent: 'space-evenly'}}>
               <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <input type="radio" id="comfort1" name={this.props.metaData.characteristics.Comfort.id} value="1" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="comfort1"  style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>Uncomfortable</label>
              </div>

              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <input type="radio" id="comfort2" name={this.props.metaData.characteristics.Comfort.id} value="2" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="comfort2" style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>Slightly uncomfortable</label>
              </div>

              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <input type="radio" id="comfort3" name={this.props.metaData.characteristics.Comfort.id} value="3" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="comfort3" style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>Ok</label>
              </div>

              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <input type="radio" id="comfort4" name={this.props.metaData.characteristics.Comfort.id} value="4" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="comfort4" style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>Comfortable</label>
              </div>

              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <input type="radio" id="comfort5" name={this.props.metaData.characteristics.Comfort.id} value="5" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="comfort5" style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>Perfect</label>
              </div>
            </div>
            </div>
            )
            }
        <br />
        {
              this.props.metaData.characteristics.Quality
            && (
            <div>
              <div style={{fontSize: '16px', marginBottom: '5px', fontWeight: 'bold'}}>Quality</div>


              <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <input type="radio" id="quality1" name={this.props.metaData.characteristics.Quality.id} value="1" onClick={this.props.characteristicsRadioClick} />
                <label htmlFor="quality1" style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>Poor</label>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <input type="radio" id="quality2" name={this.props.metaData.characteristics.Quality.id} value="2" onClick={this.props.characteristicsRadioClick} />
                <label htmlFor="quality2" style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>Below average</label>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <input type="radio" id="quality3" name={this.props.metaData.characteristics.Quality.id} value="3" onClick={this.props.characteristicsRadioClick} />
                <label htmlFor="quality3" style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>What I expected</label>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <input type="radio" id="quality4" name={this.props.metaData.characteristics.Quality.id} value="4" onClick={this.props.characteristicsRadioClick} />
                <label htmlFor="quality4" style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>Pretty great</label>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <input type="radio" id="quality5" name={this.props.metaData.characteristics.Quality.id} value="5" onClick={this.props.characteristicsRadioClick} />
                <label htmlFor="quality5" style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>Perfect</label>
                </div>
              </div>
            </div>
            )
            }
        <br />
        {
            this.props.metaData.characteristics.Length
            && (
            <div>
              <div style={{fontSize: '16px', marginBottom: '5px', fontWeight: 'bold'}}>Length</div>


              <div style={{display: 'flex', justifyContent: 'space-evenly'}}>

                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <input type="radio" id="length1" name={this.props.metaData.characteristics.Length.id} value="1" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="length1" style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>Runs short</label>
              </div>

              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <input type="radio" id="length2" name={this.props.metaData.characteristics.Length.id} value="2" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="length2" style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>Runs slightly short</label>
              </div>

              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <input type="radio" id="length3" name={this.props.metaData.characteristics.Length.id} value="3" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="length3" style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>Perfect</label>
              </div>

              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <input type="radio" id="length4" name={this.props.metaData.characteristics.Length.id} value="4" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="length4" style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>Runs slightly long</label>
              </div>

              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <input type="radio" id="length5" name={this.props.metaData.characteristics.Length.id} value="5" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="length5" style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>Runs long</label>
              </div>
            </div>
            </div>
            )
            }
        <br />
        {
            this.props.metaData.characteristics.Fit
            && (
            <div>
              <div style={{fontSize: '16px', marginBottom: '5px',fontWeight: 'bold'}}>Fit</div>


              <div style={{display: 'flex', justifyContent: 'space-evenly'}}>

              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <input type="radio" id="fit1" name={this.props.metaData.characteristics.Fit.id} value="1" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="fit1" style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>Runs tight</label>
              </div>

              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <input type="radio" id="fit2" name={this.props.metaData.characteristics.Fit.id} value="2" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="fit2" style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>Runs slightly tight</label>
              </div>

              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <input type="radio" id="fit3" name={this.props.metaData.characteristics.Fit.id} value="3" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="fit3" style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>Perfect</label>
              </div>

              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <input type="radio" id="fit4" name={this.props.metaData.characteristics.Fit.id} value="4" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="fit4" style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>Runs slightly long</label>
              </div>

              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <input type="radio" id="fit5" name={this.props.metaData.characteristics.Fit.id} value="5" onClick={this.props.characteristicsRadioClick} />
              <label htmlFor="fit5" style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>Runs long</label>
              </div>
            </div>
            </div>
            )
            }
      </div>
    );
  }
}

export default CharacteristicsRadio;
