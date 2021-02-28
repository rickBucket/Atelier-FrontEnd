/* eslint-disable */
import React from 'react';
import ProductMainView from './components/productDetail/productMainView.jsx';
import RelatedProductsMainView from './components/relatedProducts/relatedProductsMainView.jsx';
// IMPORT YOUR TOP LEVEL COMPONENTS HERE

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      widgetId: '0', // 1 = product detail, 2 = related product, 3 = q&a, 4 = reviews
    };
    this.widgetSelect = this.widgetSelect.bind(this);
  }

  widgetSelect(e) {
    e.preventDefault();
    this.setState({
      widgetId: e.target.value,
    });
  }

  render() {
    const { widgetId } = this.state;
    return (
      <div>
        <button type="submit" id="clear" value="0" onClick={this.widgetSelect}>CLEAR</button>
        <button type="submit" value="1" onClick={this.widgetSelect}>Product Detail</button>
        <button type="submit" value="2" onClick={this.widgetSelect}>Related Products</button>
        <button type="submit" value="3" onClick={this.widgetSelect}>Questionable Answers</button>
        <button type="submit" value="4" onClick={this.widgetSelect}>Ratings and Reviews</button>
        {
          widgetId === '1' && (
          <div className="productDetail">
            RENDER PRODUCT DETAIL HERE
            <ProductMainView />
          </div>
        } {
          this.state.widget_id === "2" &&
          // <div>RENDER RELATED PRODUCTS HERE</div>
          <RelatedProductsMainView />
        } {
          this.state.widget_id === "3" &&
          <div>RENDER QUESTIONABLE ANSWERS HERE</div>
        }
        {
          widgetId === '4' &&
          <div>RENDER RATINGS AND REVIEWS HERE</div>
        }
      </div>
    );
  }
}

export default App;
