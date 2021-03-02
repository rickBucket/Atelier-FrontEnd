/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  border: 0px solid grey;
  border-radius: 12px;
  margin: 12px;
  padding: 0px 20px 0px 20px;
  box-shadow: 3px 3px 8px rgba(0,0,0,0.5);
  max-width: 600px;
`
const FlexDiv = styled.div`
  border-radius: 12px;
  margin: 4px;
  display: flex;
  justify-content: center;
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
      if (val) {
        feat = `${feat}: ${val.replaceAll('\"', '')}`
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
          <h5>{this.state.description}</h5>
        </Div>
        <Div>
          {
            this.state.features.map((element) => {
              return (
                <h4 key={element}>{element}</h4>
              );
            })
          }
        </Div>
      </FlexDiv>
    );
  }
}

export default ProductDescription;
