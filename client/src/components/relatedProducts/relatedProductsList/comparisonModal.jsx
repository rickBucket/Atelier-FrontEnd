/* eslint-disable */

import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ModalContent from './styledComponents/modalContent.js';
import ModalWrapper from './styledComponents/modalWrapper.js';
import ComparisonTitle from './styledComponents/comparisonTitle.js';
import CompareWrapper from './styledComponents/compareWrapper.js';

const ComparisonModal = (props) => {
  const closeModal = (event) => {
    event.stopPropagation();
    props.closeModal()
  }

  return (
     <ModalWrapper className="modal"
     onClick={ closeModal }>
       <div className="modal-content" onClick={ e => e.stopPropagation() }>
          <CloseButton className="close" onClick={ closeModal }>&times; </CloseButton>
       </div>
       <ModalContent>
       <ComparisonTitle>
          <CompareTitle>COMPARING</CompareTitle>
          <div>{null}</div>
          <div>{null}</div>
          <ProductTitle><b>{props.parentProduct}</b></ProductTitle>
          <div>{null}</div>
          <ProductTitle><b>{props.compareProduct}</b></ProductTitle>
       </ComparisonTitle>
       <CompareWrapper>
          {props.combinedFeatures.map((feature, i) => {
            if (feature) {
              if (feature[0] === '"') {
                var cleanFeature = feature.substring(1, feature.length-1)
                return <TestDiv key={i}>{cleanFeature}</TestDiv>
              } else {
                return <TestDiv key={i}>{feature}</TestDiv>
              }
            } else {
              return <TestDiv key={i}>{feature}</TestDiv>
            };
          })
          }
      </CompareWrapper>
      </ModalContent>
     </ModalWrapper>
  );
}

const CloseButton = styled.span`
  color: #aaaaaa;
  position: relative;
  float: right; /* Positioned to the right of the parent container whichever size it is */
  font-size: 25px;
  font-weight: bold;
`;

const TestDiv = styled.div`
  text-align: center;
  font-size: 20px;
`;
const ProductTitle = styled.div`
  text-align: center;
  border-bottom: 1px solid grey;
  margin: 7px;
`;

const CompareTitle = styled.div`
  margin: 4px 5px;
  font-size: 15px;
`;

export default ComparisonModal;