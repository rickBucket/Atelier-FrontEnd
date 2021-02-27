import React from 'react';
// IMPORT YOUR TOP LEVEL COMPONENTS HERE

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      widget_id: "0" // 1 = product detail, 2 = related product, 3 = q&a, 4 = reviews
    }
    this.widgetSelect = this.widgetSelect.bind(this);
  }

  widgetSelect(e) {
    e.preventDefault();
    this.setState({
      widget_id: e.target.value
    });
  }

  render() {
    return (
      <div>
        <button value="0" onClick={this.widgetSelect}>CLEAR</button>
        <button value="1" onClick={this.widgetSelect}>Product Detail</button>
        <button value="2" onClick={this.widgetSelect}>Related Products</button>
        <button value="3" onClick={this.widgetSelect}>Questionable Answers</button>
        <button value="4" onClick={this.widgetSelect}>Ratings and Reviews</button>
        {
          this.state.widget_id === "1" &&
          <div>RENDER PRODUCT DETAIL HERE</div>
        } {
          this.state.widget_id === "2" &&
          <div>RENDER RELATED PRODUCTS HERE</div>
        } {
          this.state.widget_id === "3" &&
          <div>RENDER QUESTIONABLE ANSWERS HERE</div>
        } {
          this.state.widget_id === "4" &&
          <div>RENDER RATINGS AND REVIEWS HERE</div>
        }
      </div>
    );
  }
}

export default App;