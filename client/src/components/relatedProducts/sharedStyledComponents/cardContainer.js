import styled from 'styled-components';

const CardContainer = styled.div`
height: 400px;
width: 275px;
flex-shrink: 0;
margin: 0px 10px;
border: 1px solid grey;
border-radius: 5px;
background: rgba(255,255,255,0.1);
&:hover {
  box-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}
`;

export default CardContainer;

// border: 0px solid grey;
// box-shadow: 1px 1px 3px rgba(0,0,0,0.5);