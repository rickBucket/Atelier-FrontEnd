import React from 'react';

class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const btnStyle = {
      "text-decoration": "underline",
      "background": "transparent",
      "border": "none",
      "outline": "none",
      "cursor": "pointer",
      "float": "right",
    };
    const connect = {
      "display": "inline",
    }

    return (
      <div style={connect}>
       <h3> A: </h3> <p> setting up Answers later </p> <button value={"Helpful?"} style={btnStyle}> Yes </button>
       <button style={btnStyle}> Report </button>
      </div>
    )
  }
}

export default Answers;

// List of answers here -
// helpful button -
// report button -
// load more answers
