/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  margin: 5px;
  padding: 5px;
`
const FlexDiv = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  margin: 4px;
  display: flex;
  justify-content: center;
`

class ProductDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <FlexDiv>
        <Div>
          <h3>{this.props.slogan}</h3>
          <h5>{this.props.description}</h5>
        </Div>
        <Div>
          {
            this.props.features.map(({feature, value}) => {
              return (
                <h4 key={feature}>
                  {feature} - {value}
                </h4>
              );
            })
          }
        </Div>
      </FlexDiv>
    );
  }
}

export default ProductDescription;
