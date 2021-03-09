/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Button = styled.button`
  border: 1px solid grey;
  background: white;
  padding: 8px;
  margin: 5px 12px 24px 12px;
  cursor: pointer;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.5);
  &:hover {
    color: teal;
  }
`
const Selector = styled.select`
  border: 1px solid grey;
  background: white;
  padding: 8px;
  margin: 12px;
  cursor: pointer;
  width: 40%;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.5);
`
const FlexDiv = styled.div`
  margin: 5px;
  display: flex;
  justify-content: center;
`

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skus: this.props.skus,
      selectedSKU: ["", {quantity: -1}],
      quantity: 0,
      cartError: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFav = this.handleFav.bind(this);
  }

  handleChange(e) {
    if (e.target.value === 'Size') {
      this.setState({
        selectedSKU: ["", {quantity: -1}]
      });
    } else {
      this.setState({
        cartError: false,
        selectedSKU: Object.entries(this.state.skus).find((element) => {
          return element[1].size === e.target.value;
        })
      });
    }
  }

  handleQuantity(e) {
    this.setState({
      quantity: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.selectedSKU[0]) {
      this.setState({
        cartError: true
      });
    } else {
      axios({
        url: '/cart',
        method: 'POST',
        data: {
          sku_id: parseInt(this.state.selectedSKU[0])
        }
      })
        .then(() => {
          alert("Cart Updated!");
        });
    }
  }

  handleFav(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form>
        <FlexDiv>
          <Selector name="size" onChange={this.handleChange}>
            <option>Size</option>
            {
              Array.from(new Set(Object.values(this.state.skus).map(x => x.size))).map((x) => {
                return <option key={x}>{x}</option>
              })
            }
          </Selector>
          <Selector name="quantity" onChange={this.handleQuantity}>
            {
              this.state.selectedSKU[1].quantity === -1 &&
              <React.Fragment>
                <option>Quantity</option>
                <option>SIZE REQUIRED</option>
              </React.Fragment>
            } {
              this.state.selectedSKU[1].quantity === 0 &&
              <option>OUT OF STOCK</option>
            } {
              this.state.selectedSKU[1].quantity > 0 &&
              [...Array(Math.min(this.state.selectedSKU[1].quantity, 15) + 1).keys()].map((x) => {
                return <option key={x}>{x}</option>
              })
            }
          </Selector>
        </FlexDiv>
        <FlexDiv>
          <Button onClick={this.handleSubmit} style={{width: "69%"}}>
            Add to Bag
          </Button>
          <Button onClick={this.handleFav} style={{width: "11%"}}>
            <img src="star.png" style={{height: "18px", width: "16px"}} a=""></img>
          </Button>
        </FlexDiv>
        {
          this.state.cartError &&
          <div style={{
            color: "red",
            textAlign: "center",
            padding: "8px"
          }}>Please enter a valid configuration</div>
        }
      </form>
    );
  }
}

export default Checkout;
