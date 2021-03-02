/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  border: 1px solid grey;
  border-radius: 16px;
  padding: 12px;
  margin: 12px;
  box-shadow: 4px 4px 5px black;
`
const InvisDiv = styled.div`
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
`
const Img = styled.img`
  border: 1px solid black;
  border-radius: 14px;
  margin: 5px;
  max-height: 100px;
  max-width: 100px;
  cursor: pointer;
  box-shadow: 4px 4px 4px black;
`
const FlexStyleDiv = styled.div`
  border-radius: 12px;
  padding: 5px;
  margin: 5px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Div>
        {'Style > Selected Style'}
        <FlexStyleDiv>
          {
            this.props.styles.map((style) => {
              return (
                <Img key={style.style_id} src={style.photos[0].thumbnail_url} a=''></Img>
              );
            })
          }
        </FlexStyleDiv>
      </Div>
    );
  }
}

export default StyleSelector;
