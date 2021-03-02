/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  border: 0px solid grey;
  border-radius: 12px;
  padding: 12px;
  margin: 12px;
  box-shadow: 3px 3px 8px grey;
`
const InvisDiv = styled.div`
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
`
const Img = styled.img`
  border: 0px solid black;
  border-radius: 12px;
  margin: 12px;
  max-height: 100px;
  max-width: 100px;
  cursor: pointer;
  box-shadow: 3px 3px 8px grey;
`
const FlexStyleDiv = styled.div`
  border-radius: 12px;
  padding: 5px;
  margin: 5px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 540px;
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
