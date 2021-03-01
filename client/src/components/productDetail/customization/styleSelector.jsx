/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  border: 4px solid black;
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
`
const Img = styled.img`
  border: 4px solid black;
  border-radius: 25px;
  margin: 5px;
  max-height: 100px;
  max-width: 100px;
  cursor: pointer;
`

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Div>
        {'Style > Selected Style'}
        {
          this.props.styles.map((style) => {
            return (
              <Div key={style.style_id}>
                <Img src={style.photos[0].thumbnail_url} a=''></Img>
              </Div>
            );
          })
        }
      </Div>
    );
  }
}

export default StyleSelector;
