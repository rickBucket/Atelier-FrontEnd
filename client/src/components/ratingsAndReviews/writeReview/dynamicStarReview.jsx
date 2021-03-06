// import React from 'react';


// const DynamicStarReview = () => {
//   return (
//   <div>
//     <b>* Overall</b>
//     <br />

//     {
//       this.state.mouseOver[0] === 1
//       ? <span className="fa fa-star" onMouseEnter={() => {this.setState({mouseOver: [1, 0, 0, 0, 0]})}} onClick={() => {this.setState({rating: 1, mouseOver: [1, 0, 0, 0, 0]})}}></span>
//       : <span className="fa fa-star-o" onMouseEnter={() => {this.setState({mouseOver: [1, 0, 0, 0, 0]})}}></span>
//     }
//     {
//     this.state.mouseOver[1] === 1
//       ? <span className="fa fa-star" onMouseEnter={() => {this.setState({mouseOver: [1, 1, 0, 0, 0]})}} onClick={() => {this.setState({rating: 2, mouseOver: [1, 1, 0, 0, 0]})}}></span>
//       : <span className="fa fa-star-o" onMouseEnter={() => {this.setState({mouseOver: [1, 1, 0, 0, 0]})}}></span>
//     }
//     {
//     this.state.mouseOver[2] === 1
//       ? <span className="fa fa-star" onMouseEnter={() => {this.setState({mouseOver: [1, 1, 1, 0, 0]})}} onClick={() => {this.setState({rating: 3,  mouseOver: [1, 1, 1, 0, 0]})}}></span>
//       : <span className="fa fa-star-o" onMouseEnter={() => {this.setState({mouseOver: [1, 1, 1, 0, 0]})}}></span>
//     }
//     {
//     this.state.mouseOver[3] === 1
//       ? <span className="fa fa-star" onMouseEnter={() => {this.setState({mouseOver: [1, 1, 1, 1, 0]})}} onClick={() => {this.setState({rating: 4,  mouseOver: [1, 1, 1, 1, 0]})}}></span>
//       : <span className="fa fa-star-o" onMouseEnter={() => {this.setState({mouseOver: [1, 1, 1, 1, 0]})}}></span>
//     }
//     {
//     this.state.mouseOver[4] === 1
//       ? <span className="fa fa-star" onClick={() => {this.setState({rating: 5,  mouseOver: [1, 1, 1, 1, 1]})}}></span>
//       : <span className="fa fa-star-o" onMouseEnter={() => {this.setState({mouseOver: [1, 1, 1, 1, 1]})}}></span>
//     }
//     <br />
//     <small>
//       1 - Poor
//       2 - Fair
//       3 - Average
//       4 - Good
//       5 - Great
//     </small>

//   </div>
//   )
// }

// export default DynamicStarReview;