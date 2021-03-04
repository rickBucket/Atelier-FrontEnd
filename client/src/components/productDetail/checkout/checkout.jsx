/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  border-radius: 12px;
  padding: 4px 0px 4px 0px;
  margin: 20px 12px 12px 12px;
  box-shadow: 3px 3px 8px rgba(0,0,0,0.5);
  background: rgba(255,255,255,0.1);
`
const ButtonCheckout = styled.button`
  border: 0px solid grey;
  background: white;
  border-radius: 5px;
  margin: 5px 12px 12px 12px;
  cursor: pointer;
  width: 80%;
  box-shadow: 3px 3px 8px rgba(0,0,0,0.5);
`
const ButtonFav = styled.button`
  border: 0px solid grey;
  background: white;
  border-radius: 5px;
  padding: 5px;
  margin: 5px 12px 12px 12px;
  cursor: pointer;
  width: 20%;
  box-shadow: 3px 3px 8px rgba(0,0,0,0.5);
`
const Selector = styled.select`
  border: 0px solid grey;
  background: white;
  border-radius: 5px;
  padding: 5px;
  margin: 12px;
  cursor: pointer;
  width: 50%;
  box-shadow: 3px 3px 8px rgba(0,0,0,0.5);
`
const FlexDiv = styled.div`
  border-radius: 8px;
  margin: 5px;
  display: flex;
  justify-content: center;
`

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skus: this.props.skus,
      selectedSKU: {quantity: 0},
      quantity: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    if (e.target.value === 'Size') {
      this.setState({
        selectedSKU: {quantity: 0}
      });
    } else {
      this.setState({
        selectedSKU: Object.values(this.state.skus).find((element) => {
          return element.size === e.target.value;
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
  }

  render() {
    return (
      <Div>
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
              <option>Quantity</option>
              {
                [...Array(this.state.selectedSKU.quantity % 15).keys()].map((x) => {
                  return <option key={x}>{x}</option>
                })
              }
            </Selector>
          </FlexDiv>
          <FlexDiv>
            <ButtonCheckout onClick={this.handleSubmit}>Add to Bag</ButtonCheckout>
            <ButtonFav onClick={this.handleSubmit}>STAR</ButtonFav>
          </FlexDiv>
        </form>
      </Div>
    );
  }
}

export default Checkout;
