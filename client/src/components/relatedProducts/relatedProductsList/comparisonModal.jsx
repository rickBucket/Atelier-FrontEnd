/* eslint-disable */

import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ComparisonModal = (props) => {
  const divStyle = {
    display: props.displayModal ? 'block' : 'none'
  };

  function closeModal(e) {
    e.stopPropagation()
    props.closeModal()
  }
  return (
     <Modal className="modal"
     onClick={ closeModal }>
       <div className="modal-content" onClick={ e => e.stopPropagation() }>
          <span className="close" onClick={ closeModal }>&times; Hello Hello Hello </span>
       </div>
     </Modal>
  );
}

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
padding-top: 80px; /* Location of the content container */
`;

const ModalContent = styled.div`
background-color: white;
width: 70%; /* Width in proportion to its parent container*/
max-width: 640px; /* Max width where it stops expanding */
height: 70%; /* Height in proportion to its parent container */
margin: auto; /* Auto margin according to the element width */
padding: 10px;
border: 1px solid black;
border-radius: 20px; /* Optional. Rounds container corners */
`;

export default ComparisonModal;