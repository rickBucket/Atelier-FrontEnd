/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
`
const Img = styled.img`
  border: 2px solid black;
  border-radius: 25px;
  margin: 5px;
  max-height: 100px;
  max-width: 100px;
  cursor: pointer;
`
const FlexStyleDiv = styled.div`
  border: 2px solid black;
  border-radius: 10px;
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
