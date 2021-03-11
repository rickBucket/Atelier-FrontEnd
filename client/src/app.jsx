/* eslint-disable */
import React from 'react';
import axios from 'axios';
import RatingsApp from './components/ratingsAndReviews/ratingsApp.jsx'
import ProductMainView from './components/productDetail/productMainView.jsx';
import RelatedProductsMainView from './components/relatedProducts/relatedProductsMainView.jsx';
import QuestionMaster from './components/questionsAndAnswers/QuestionMaster.jsx';
import styled from 'styled-components';

const Title = styled.div`
  width: 100%;
  height: 72px;
  margin-left: -8px;
  margin-top: -84px;
  z-index: 250;
  position: fixed;
  background: linear-gradient(120deg, hsla(175,75%,45%,0.5), hsla(235,75%,45%,0.5));
  text-align: center;
  color: white;
  text-shadow: 1px 1px 2px black;
  font-size: 24px;
  font-weight: bold;
  backdrop-filter: blur(16px);
  cursor: pointer;
  &:hover {
    background: linear-gradient(120deg, hsla(175,55%,55%,0.7), hsla(235,55%,55%,0.7));
  }
`;
const Button = styled.button`
  margin: -67px 12px;
  z-index: 270;
  position: fixed;
  background: linear-gradient(120deg, hsla(175,75%,75%,0.7), hsla(235,75%,75%,0.7));
  padding: 10px 16px;
  border: 0px solid grey;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  &:hover {
    background: linear-gradient(-60deg, hsla(175,75%,75%,0.7), hsla(235,75%,75%,0.7));
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productID: '',
      productIDs: [],
      loadedID: 0,
      metaData: {},
      productIndex: 0
    };
    this.nextProduct = this.nextProduct.bind(this);
    this.fetchProductID = this.fetchProductID.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
    this.fetchMeta = this.fetchMeta.bind(this);
  }

// adding component did mount to choose productID
  componentDidMount() {
    this.fetchProductID();
  }

  fetchProductID() {
    axios.get('/products/?count=13&page=2')
      .then(({data})=> {
        this.setState({
          productID: data[this.state.productIndex].id,
          productIDs: data.map((item) => item.id),
          loadedID: this.state.loadedID + 1
        });
      })
      .then(() => {
        this.fetchMeta();
      })
      .catch((error)=> {
        console.log('Error setting productID in App', error)
      })
  }

  fetchMeta() {
    axios.get(`/reviews/?product_id=${this.state.productID}&meta=meta`)
      .then((results) => {
        this.setState({
          metaData: results.data,
          loadedID: this.state.loadedID + 1
        });
      })
      .catch((err) => {
        console.log('error on meta GET request', err);
      });
  }

  nextProduct(e) {
    e.preventDefault();
    this.setState({
      productIndex: (this.state.productIndex + 1)%7,
      productID: this.state.productIDs[(this.state.productIndex + 1)%7],
      loadedID: 1
    }, this.fetchMeta);
  }

  scrollToTop(e) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  updateProduct(productID) {
    this.setState({
      loadedID: 0
    })
    axios.get(`/reviews/?product_id=${productID}&meta=meta`)
    .then((results) => {
      this.setState({
        metaData: results.data,
        productID: productID,
        loadedID: 2
      });
    })
    .catch((err) => {
      console.log('error on meta GET request', err);
    });
  }

  render() {
    return (
      <div>
        <Title>
          <h1 onClick={this.scrollToTop} style={{marginTop: "0px"}}>Observant Ostritches</h1>
        </Title>
        <Button type="submit" id="next" onClick={this.nextProduct}>Next Product</Button>
        {
          this.state.loadedID === 2 &&
          <div>
            <ProductMainView productID={this.state.productID} ratings={this.state.metaData.ratings}/>
            <RelatedProductsMainView updateProduct={this.updateProduct} productID={this.state.productID}/>
            <QuestionMaster productID={this.state.productID}/>
            <RatingsApp productID={this.state.productID} metaData={this.state.metaData}/>
          </div>
        }
      </div>
    );
  }
}

export default App;
