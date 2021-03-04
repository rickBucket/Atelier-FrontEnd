import React from 'react';
import styled from 'styled-components';

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

const Photo = styled.img`
    background-color: grey;
    width: 35%; /* Width in proportion to its parent container*/
    max-width: 320px; /* Max width where it stops expanding */
    height: 33%; /* Height in proportion to its parent container */
    margin: auto; /* Auto margin according to the element width */
    padding: 10px;
    border: 1px solid black;
    border-radius: 10px; /* Optional. Rounds container corners */
`;

const PhotoModal = (props) => {
  const divStyle = {
    display: props.displayModal ? 'block' : 'none',
  };
  function closeModal(event) {
    event.stopPropagation();
    props.closeModal();
  }

  return (
    <Modal className="modal"
    onClick={ closeModal }
         style={divStyle}>
    <Photo src={props.photo}className="modal-content" onClick={ event => event.stopPropagation() } />
    </Modal>
  );
}

export default PhotoModal;
