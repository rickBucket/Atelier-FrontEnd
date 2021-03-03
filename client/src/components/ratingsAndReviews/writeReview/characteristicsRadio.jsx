// import React from 'react';

// class CharacteristicsRadio extends React.Component {
//   constructor(props){
//     super(props)
//   }

//   render(){
//     console.log(props)
//   return(
//   <div style={{
//     borderRadius: '20px',
//     boxShadow: '5px 5px 10px grey',
//     padding: '10px',
//     gridColumn: '1/-1',
//     gridRow: '2'
//   }}>Characteristics
//     {
//     this.props.metaData.characteristics.Size &&
//     <div>
//       <b>Size</b>
//       <input type="radio" id="size1" name={this.props.metaData.characteristics.Size.id} value="1" onClick={this.characteristicsRadioClick}></input>
//       <label for="size1">A size too small</label>
//       <input type="radio" id="size2" name={this.props.metaData.characteristics.Size.id} value="2" onClick={this.characteristicsRadioClick}></input>
//       <label for="size2">½ a size too small</label>
//       <input type="radio" id="size3" name={this.props.metaData.characteristics.Size.id} value="3" onClick={this.characteristicsRadioClick}></input>
//       <label for="size3">Perfect</label>
//       <input type="radio" id="size4" name={this.props.metaData.characteristics.Size.id} value="4" onClick={this.characteristicsRadioClick}></input>
//       <label for="size4">½ a size too big</label>
//       <input type="radio" id="size5" name={this.props.metaData.characteristics.Size.id} value="5" onClick={this.characteristicsRadioClick}></input>
//       <label for="size5">A size too wide</label>
//     </div>
//     }


//     {
//       this.props.metaData.characteristics.Width &&
//     <div>
//       <b>Width</b>
//       <input type="radio" id="width1" name={this.props.metaData.characteristics.Width.id} value="1" onClick={this.characteristicsRadioClick}></input>
//       <label for="width1">Too narrow</label>
//       <input type="radio" id="width2" name={this.props.metaData.characteristics.Width.id} value="2" onClick={this.characteristicsRadioClick}></input>
//       <label for="width2">Slightly narrow</label>
//       <input type="radio" id="width3" name={this.props.metaData.characteristics.Width.id} value="3" onClick={this.characteristicsRadioClick}></input>
//       <label for="width3">Perfect</label>
//       <input type="radio" id="width4" name={this.props.metaData.characteristics.Width.id} value="4" onClick={this.characteristicsRadioClick}></input>
//       <label for="width4">Slightly wide</label>
//       <input type="radio" id="width5" name={this.props.metaData.characteristics.Width.id} value="5" onClick={this.characteristicsRadioClick}></input>
//       <label for="width5">Too wide</label>
//     </div>
//     }


//     {
//     this.props.metaData.characteristics.Comfort &&
//     <div>
//       <b>Comfort</b>
//       <input type="radio" id="comfort1" name={this.props.metaData.characteristics.Comfort.id} value="1" onClick={this.characteristicsRadioClick}></input>
//       <label for="comfort1">Uncomfortable</label>
//       <input type="radio" id="comfort2" name={this.props.metaData.characteristics.Comfort.id} value="2" onClick={this.characteristicsRadioClick}></input>
//       <label for="comfort2">Slightly uncomfortable</label>
//       <input type="radio" id="comfort3" name={this.props.metaData.characteristics.Comfort.id} value="3" onClick={this.characteristicsRadioClick}></input>
//       <label for="comfort3">Ok</label>
//       <input type="radio" id="comfort4" name={this.props.metaData.characteristics.Comfort.id} value="4" onClick={this.characteristicsRadioClick}></input>
//       <label for="comfort4">Comfortable</label>
//       <input type="radio" id="comfort5" name={this.props.metaData.characteristics.Comfort.id} value="5" onClick={this.characteristicsRadioClick}></input>
//       <label for="comfort5">Perfect</label>
//     </div>
//     }


//     {
//     this.props.metaData.characteristics.Quality
//     <div>
//       <b>Quality</b>
//       <input type="radio" id="quality1" name={this.props.metaData.characteristics.Quality.id} value="1" onClick={this.characteristicsRadioClick}></input>
//       <label for="quality1">Poor</label>
//       <input type="radio" id="quality2" name={this.props.metaData.characteristics.Quality.id} value="2" onClick={this.characteristicsRadioClick}></input>
//       <label for="quality2">Below average</label>
//       <input type="radio" id="quality3" name={this.props.metaData.characteristics.Quality.id} value="3" onClick={this.characteristicsRadioClick}></input>
//       <label for="quality3">What I expected</label>
//       <input type="radio" id="quality4" name={this.props.metaData.characteristics.Quality.id} value="4" onClick={this.characteristicsRadioClick}></input>
//       <label for="quality4">Pretty great</label>
//       <input type="radio" id="quality5" name={this.props.metaData.characteristics.Quality.id} value="5" onClick={this.characteristicsRadioClick}></input>
//       <label for="quality5">Perfect</label>
//     </div>
//     }


//     {
//     this.props.metaData.characteristics.Length &&
//     <div>
//       <b>Length</b>
//       <input type="radio" id="length1" name={this.props.metaData.characteristics.Length.id} value="1" onClick={this.characteristicsRadioClick}></input>
//       <label for="length1">Runs short</label>
//       <input type="radio" id="length2" name={this.props.metaData.characteristics.Length.id} value="2" onClick={this.characteristicsRadioClick}></input>
//       <label for="length2">Runs slightly short</label>
//       <input type="radio" id="length3" name={this.props.metaData.characteristics.Length.id} value="3" onClick={this.characteristicsRadioClick}></input>
//       <label for="length3">Perfect</label>
//       <input type="radio" id="length4" name={this.props.metaData.characteristics.Length.id} value="4" onClick={this.characteristicsRadioClick}></input>
//       <label for="length4">Runs slightly long</label>
//       <input type="radio" id="length5" name={this.props.metaData.characteristics.Length.id} value="5" onClick={this.characteristicsRadioClick}></input>
//       <label for="length5">Runs long</label>
//     </div>
//     }


//     {
//     this.props.metaData.characteristics.Fit
//     <div>
//       <b>Fit</b>
//       <input type="radio" id="fit1" name={this.props.metaData.characteristics.Fit.id} value="1" onClick={this.characteristicsRadioClick}></input>
//       <label for="fit1">Runs tight</label>
//       <input type="radio" id="fit2" name={this.props.metaData.characteristics.Fit.id} value="2" onClick={this.characteristicsRadioClick}></input>
//       <label for="fit2">Runs slightly tight</label>
//       <input type="radio" id="fit3" name={this.props.metaData.characteristics.Fit.id} value="3" onClick={this.characteristicsRadioClick}></input>
//       <label for="fit3">Perfect</label>
//       <input type="radio" id="fit4" name={this.props.metaData.characteristics.Fit.id} value="4" onClick={this.characteristicsRadioClick}></input>
//       <label for="fit4">Runs slightly long</label>
//       <input type="radio" id="fit5" name={this.props.metaData.characteristics.Fit.id} value="5" onClick={this.characteristicsRadioClick}></input>
//       <label for="fit5">Runs long</label>
//     </div>
//     }

//   </div>
//   )
//   }
// }

// export default CharacteristicsRadio;