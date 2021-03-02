/* eslint-disable */

import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ModalContent from './styledComponents/modalContent.js';
import Modal from './styledComponents/modal.js';

const ComparisonModal = (props) => {
  const divStyle = {
    display: props.displayModal ? 'block' : 'none'
  };

  const closeModal = (event) => {
    event.stopPropagation();
    props.closeModal()
  }

  return (
     <Modal className="modal"
     onClick={ closeModal }>
       <div className="modal-content" onClick={ e => e.stopPropagation() }>
          <CloseButton className="close" onClick={ closeModal }>&times; </CloseButton>

       </div>
       Table Goes Here
     </Modal>
  );
}

const CloseButton = styled.span`
color: #aaaaaa;
float: right; /* Positioned to the right of the parent container whichever size it is */
font-size: 25px;
font-weight: bold;
`;

export default ComparisonModal;