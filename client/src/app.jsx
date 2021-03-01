/* eslint-disable */
import React from 'react';
import axios from 'axios';
import RatingsApp from './components/ratingsAndReviews/ratingsApp.jsx'
import ProductMainView from './components/productDetail/productMainView.jsx';
import RelatedProductsMainView from './components/relatedProducts/relatedProductsMainView.jsx';
// IMPORT YOUR TOP LEVEL COMPONENTS HERE
import QuestionMaster from './components/questionsAndAnswers/QuestionMaster.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      widget_id: '0', // 1 = product detail, 2 = related product, 3 = q&a, 4 = reviews
      productID: ''
    };
    this.widgetSelect = this.widgetSelect.bind(this);
  }
// adding component did mount to choose productID
  componentDidMount() {
    axios.get('/products/?count=1')
      .then(({data})=> {
        this.setState({
          productId: data[0].id
        });
      })
      .catch((error)=> {
        console.log('Error setting productID in App', error)
      });
  };

  widgetSelect(e) {
    e.preventDefault();
    this.setState({
      widget_id: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <button type="submit" id="clear" value="0" onClick={this.widgetSelect}>CLEAR</button>
        <button type="submit" value="1" onClick={this.widgetSelect}>Product Detail</button>
        <button type="submit" value="2" onClick={this.widgetSelect}>Related Products</button>
        <button type="submit" value="3" onClick={this.widgetSelect}>Questionable Answers</button>
        <button type="submit" value="4" onClick={this.widgetSelect}>Ratings and Reviews</button>
        {
          this.state.widget_id === '1' &&
          <div className="productDetail">
            RENDER PRODUCT DETAIL HERE
            <ProductMainView productID={this.state.productID}/>
          </div>
        } {
          this.state.widget_id === "2" &&
          // <div>RENDER RELATED PRODUCTS HERE</div>
          <RelatedProductsMainView productID={this.state.productID}/>
        } {
          this.state.widget_id === "3" &&
          <QuestionMaster productID={this.state.productID}/>
        } {
          this.state.widget_id === "4" &&
          <div>
            <RatingsApp productID={this.state.productID}/>
          </div>
        }
      </div>
    );
  }
}

export default App;
