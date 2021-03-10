/* eslint-disable */
import React from 'react';
import axios from 'axios';
import RatingsApp from './components/ratingsAndReviews/ratingsApp.jsx'
import ProductMainView from './components/productDetail/productMainView.jsx';
import RelatedProductsMainView from './components/relatedProducts/relatedProductsMainView.jsx';
// IMPORT YOUR TOP LEVEL COMPONENTS HERE
import QuestionMaster from './components/questionsAndAnswers/QuestionMaster.jsx';
import styled from 'styled-components';

const Title = styled.div`
  width: 100%;
  height: 76px;
  margin: -8px;
  z-index: 250;
  position: fixed;
  background: linear-gradient(120deg, hsla(175,75%,45%,0.5), hsla(235,75%,45%,0.5));
  text-align: center;
  color: white;
  text-shadow: 1px 1px 2px black;
  font-size: 24px;
  font-weight: bold;
  backdrop-filter: blur(16px);
`

const Button = styled.button`
  margin-top: 76px;
`

//background: linear-gradient(180deg, hsla(190,80%,85%,0.5), hsla(240,60%,100%,0));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productID: '',
      loadedID: 0,
      metaData: {},
      productIndex: 0
    };
    this.nextProduct = this.nextProduct.bind(this);
    this.fetchProductID = this.fetchProductID.bind(this);
  }

// adding component did mount to choose productID
  componentDidMount() {
    this.fetchProductID();
  }

  fetchProductID() {
    axios.get('/products/?count=7&page=4')
      .then(({data})=> {
        this.setState({
          productID: data[this.state.productIndex].id,
          loadedID: this.state.loadedID + 1
        });
        axios.get(`/reviews/?product_id=${data[this.state.productIndex].id}&meta=meta`)
          .then((results) => {
            this.setState({
              metaData: results.data,
              loadedID: this.state.loadedID + 1
            });
          })
          .catch((err) => {
            console.log('error on meta GET request', err);
          });
      })
      .catch((error)=> {
        console.log('Error setting productID in App', error)
      })
  }

  nextProduct(e) {
    e.preventDefault();
    this.setState({
      productIndex: (this.state.productIndex + 1)%4,
      loadedID: 0
    });
    this.fetchProductID();
  }

  render() {
    return (
      <div>
        <Title>
          <h1 style={{marginTop: "4px"}}>Observant Ostritches</h1>
        </Title>
        <Button type="submit" id="clear" value="0" onClick={this.widgetSelect}>CLEAR</Button>
        <Button type="submit" id="next" onClick={this.nextProduct}>Next Product</Button>
        {
          this.state.loadedID === 2 &&
          <div>
            <ProductMainView productID={this.state.productID} ratings={this.state.metaData.ratings}/>
            <RelatedProductsMainView productID={this.state.productID}/>
            <QuestionMaster productID={this.state.productID}/>
            <RatingsApp productID={this.state.productID} metaData={this.state.metaData}/>
          </div>
        }
      </div>
    );
  }
}

export default App;
