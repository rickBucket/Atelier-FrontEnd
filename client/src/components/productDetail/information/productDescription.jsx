/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  border: 0px solid grey;
  border-radius: 8px;
  margin: 8px;
  padding: 0px 32px 0px 32px;
  max-width: 480px;
`
const FlexDiv = styled.div`
  border-radius: 8px;
  display: flex;
  justify-content: center;
  max-width: 920px;
  margin: auto;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.5);
`
const Separator = styled.div`
  margin: 20px;
  background: rgba(0,0,0,0.4);
  color: rgba(0,0,0,0);
`


// props => slogan-string description-string features-[{feature value}]
class ProductDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slogan: this.props.slogan,
      description: this.props.description,
      features: this.formatFeatures(this.props.features)
    };
  }

  formatFeatures(featureArray) {
    var features = [];
    featureArray.forEach((element) => {
      let feat = ' - ' + element.feature;
      let val = element.value;
      if (typeof val === 'string' && val) {
        feat = `${feat}: ${val.split('\"').join('')}`
      }
      features.push(feat);
    });
    return Array.from(new Set(features));
  }

  render() {
    return (
      <FlexDiv>
        <Div>
          <h3>{this.state.slogan}</h3>
          <p>{this.state.description}</p>
        </Div>
        <Separator>|</Separator>
        <Div>
          {
            this.state.features.map((element) => {
              return (
                <p key={element}>{element}</p>
              );
            })
          }
        </Div>
      </FlexDiv>
    );
  }
}

export default ProductDescription;
