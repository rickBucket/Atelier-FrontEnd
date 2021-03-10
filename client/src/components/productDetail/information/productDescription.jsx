/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin: 8px;
  padding: 0px 64px 0px 32px;
  max-width: 480px;
`;
const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  max-width: 960px;
  margin: 48px auto 96px auto;
`;
const Separator = styled.div`
  margin: 20px;
  background: rgba(0,0,0,0.7);
  color: rgba(0,0,0,0);
`;


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
    if (!featureArray) {
      return [];
    }
    featureArray.forEach((element) => {
      let feat = ' - ' + element.feature;
      const val = element.value;
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
        <Div style={{borderRight: "1px solid grey"}}>
          <h3>{this.state.slogan}</h3>
          <p>{this.state.description}</p>
        </Div>
        <Div>
          {
            this.state.features.map((element) => {
              return <h5 key={element}>{element}</h5>;
            })
          }
        </Div>
      </FlexDiv>
    );
  }
}

export default ProductDescription;
