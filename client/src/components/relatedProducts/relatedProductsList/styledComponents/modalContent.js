import styled from 'styled-components';

const ModalContent = styled.div`
background-color: white;
width: 70%; /* Width in proportion to its parent container*/
max-width: 640px; /* Max width where it stops expanding */
height: 70%; /* Height in proportion to its parent container */
margin: auto; /* Auto margin according to the element width */
justify-content: center;
align-items: center;
padding: 10px;
border: 1px solid black;
border-radius: 20px; /* Optional. Rounds container corners */
`;

export default ModalContent;
