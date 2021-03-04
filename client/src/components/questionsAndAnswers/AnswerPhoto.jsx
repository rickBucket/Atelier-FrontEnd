import React from 'react';
import styled from 'styled-components';

const Photos = styled.img`
  height: 100px;
  width: 130px;
  padding-left: 25px;
`;
const Modal = styled.div`
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Overlay effect: translucent background: black w/ partial opacity */
    z-index: 1; /* Overlay effect: positioned over other containers */
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    position: fixed; /* Fix position on the top-left corner*/
    top: 0;
    left: 0;
    overflow: auto; /* Enable scroll if needed */
    padding-top: 40px; /* Location of the content container */
`;

const Modal_Con = styled.div`
    background-color: white;
    width: 35%; /* Width in proportion to its parent container*/
    max-width: 320px; /* Max width where it stops expanding */
    height: 33%; /* Height in proportion to its parent container */
    margin: auto; /* Auto margin according to the element width */
    padding: 10px;
    border: 1px solid black;
    border-radius: 20px; /* Optional. Rounds container corners */
`;

class AnswerPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  render() {
    const {photo} = this.props;
    return (
      <div className="modal">
        <div className="modal-content">
        <Photos src={photo} alt="Product" />
        </div>
      </div>
    );
  }
}
export default AnswerPhoto;

//create a modal that basically enlarges photo and
{/* <span className="close">$times;</span> */}