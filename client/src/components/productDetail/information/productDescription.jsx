/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  border: 4px solid black;
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
`

class ProductDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Div>
        ProductDescription
        <Div>{this.props.slogan}</Div>
        <Div>{this.props.description}</Div>
        <Div>
          {
            this.props.features.map(({feature, value}) => {
              return (
                <Div key={feature}>
                  {feature} - {value}
                </Div>
              );
            })
          }
        </Div>
      </Div>
    );
  }
}

export default ProductDescription;
