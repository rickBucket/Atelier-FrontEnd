/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const InvisDiv = styled.div`
  border-radius: 8px;
  padding: 8px 12px 0px 12px;
  margin: 12px 12px 0px 12px;
  background: rgba(255,255,255,0.1);
`
const Img = styled.img`
  border: 2px solid rgba(0,0,0,0);
  border-radius: 50%;
  margin: 4px;
  cursor: pointer;
  height: 68px;
  width: 68px;
  object-fit: cover;
  &:hover {
    border: 0px solid black;
    height: 72px;
    width: 72px;
  }
`
const FlexStyleDiv = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 400px;
`

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStyle: this.props.selectedStyle.name
    }
  }

  handleClick(id, name) {
    this.props.changeStyle(id);
    this.setState({
      selectedStyle: name
    });
  }

  render() {
    return (
      <InvisDiv>
        <h3 style={{margin: "0px"}}>{`Style > ${this.state.selectedStyle}`}</h3>
        <FlexStyleDiv>
          {
            this.props.styles.map((style) => {
              return (
                <Img key={style.style_id}
                  src={style.photos[0].thumbnail_url}
                  onClick={this.handleClick.bind(this, style.style_id, style.name)}
                  a=''
                ></Img>
              );
            })
          }
        </FlexStyleDiv>
      </InvisDiv>
    );
  }
}

export default StyleSelector;
