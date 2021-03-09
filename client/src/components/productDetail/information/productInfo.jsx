/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import StarRating from '../../shared/starRating.jsx';

const Div = styled.div`
  border: 1px solid grey;
  padding: 16px 32px 16px 32px;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.5);
  margin: 32px 12px 24px 12px;
  max-width: 540px;
  background: linear-gradient(0deg, hsl(190,70%,92%), hsl(240,60%,100%));
`

// needs: rating, review link, category, name. price
class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewAmount: 0,
      averageRating: 0
    };
    this.averageRating = this.averageRating.bind(this);
    this.averageRating();
  }

  componentDidMount() {
    this.averageRating();
  }

  averageRating() {
    var sum = 0;
    var amount = 0;
    Object.keys(this.props.ratings).forEach((key) => {
      sum += parseInt(this.props.ratings[key]) * parseInt(key);
      amount += parseInt(this.props.ratings[key]);
    });
    this.setState({
      reviewAmount: amount,
      averageRating: sum / amount
    });
  }

  render() {
    return (
      <Div>
        <h5 style={{float: "right", "marginTop": "8px"}}>
          <a href="#addReview" style={{fontSize: "12px", color: "rgb(32,64,96)"}}>
            {`Read All ${this.state.reviewAmount} Reviews`}
          </a>
        </h5>
        <StarRating
          averageRating={this.state.averageRating}
          height={21}
          width={18}
        />
        <h3>{this.props.category}</h3>
        <h1>{this.props.name}</h1>
        {
          !!this.props.sale &&
          <h4>
            <a style={{"textDecoration": "line-through"}}>${this.props.price}</a>
            <a style={{color: "red"}}> ${this.props.sale}</a>
          </h4>
        } {
          !this.props.sale &&
          <h4>${this.props.price}</h4>
        }
      </Div>
    );
  }
}

export default ProductInfo;
