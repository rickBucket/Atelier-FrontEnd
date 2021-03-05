/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const InvisDiv = styled.div`
  border-radius: 8px;
  padding: 12px 12px 0px 12px;
  margin: 12px 12px 0px 12px;
  background: rgba(255,255,255,0.1);
`
const Img = styled.img`
  border-radius: 50%;
  margin: 5px;
  cursor: pointer;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.5);
  height: 70px;
  width: 70px;
  object-fit: cover;
`
const FlexStyleDiv = styled.div`
  border-radius: 8px;
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
        {`Style > ${this.state.selectedStyle}`}
        <FlexStyleDiv>
          {
            this.props.styles.map((style) => {
              return (
                <Img key={style.style_id} src={style.photos[0].thumbnail_url} onClick={this.handleClick.bind(this, style.style_id, style.name)} a=''></Img>
              );
            })
          }
        </FlexStyleDiv>
      </InvisDiv>
    );
  }
}

export default StyleSelector;
