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
      productID: '',
      loadedID: 0,
      productIndex: 0
    };
    this.widgetSelect = this.widgetSelect.bind(this);
    this.nextProduct = this.nextProduct.bind(this);
    this.fetchProductID = this.fetchProductID.bind(this);
  }

// adding component did mount to choose productID
  componentDidMount() {
    this.fetchProductID();
  }

  fetchProductID() {
    axios.get('/products/?count=20')
      .then(({data})=> {
        this.setState({
          productID: data[this.state.productIndex].id,
          loadedID: 1
        });
      })
      .catch((error)=> {
        console.log('Error setting productID in App', error)
      });
  }

  widgetSelect(e) {
    e.preventDefault();
    this.setState({
      widget_id: e.target.value,
    });
  }

  nextProduct(e) {
    e.preventDefault();
    this.setState({
      productIndex: (this.state.productIndex + 1)%20,
      loadedID: 0
    });
    this.fetchProductID();
  }

  render() {
    return (
      <div>
        <button type="submit" id="clear" value="0" onClick={this.widgetSelect}>CLEAR</button>
        <button type="submit" id="clear" value="0" onClick={this.nextProduct}>Next Product</button>
        {
          this.state.loadedID === 1 &&
          <div>
            <button type="submit" value="1" onClick={this.widgetSelect}>Product Detail</button>
            <button type="submit" value="2" onClick={this.widgetSelect}>Related Products</button>
            <button type="submit" value="3" onClick={this.widgetSelect}>Questionable Answers</button>
            <button type="submit" value="4" onClick={this.widgetSelect}>Ratings and Reviews</button>
        </div>
        } {
          this.state.loadedID === 1 && this.state.widget_id === '1' &&
          <div className="productDetail">
            <ProductMainView productID={this.state.productID}/>
          </div>
        } {
          this.state.loadedID === 1 && this.state.widget_id === "2" &&
          // <div>RENDER RELATED PRODUCTS HERE</div>
          <RelatedProductsMainView productID={this.state.productID}/>
        } {
          this.state.loadedID === 1 && this.state.widget_id === "3" &&
          <QuestionMaster productID={this.state.productID}/>
        } {
          this.state.loadedID === 1 && this.state.widget_id === "4" &&
          <div>
            <RatingsApp productID={this.state.productID}/>
          </div>
        }
      </div>
    );
  }
}

export default App;
