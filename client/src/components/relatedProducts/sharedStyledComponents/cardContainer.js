import styled from 'styled-components';

const CardContainer = styled.div`
height: 400px;
width: 275px;
flex-shrink: 0;
margin: 0px 10px;
background: rgba(255,255,255,0.1);
&:hover {
  box-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  bottom-border: 0px;
}
`;

export default CardContainer;

// border-radius: 5px;
// border-top: 1px solid grey;
// border-bottom: 2px solid grey;