import React from 'react';
import styled from 'styled-components';

const Photos = styled.img`
  height: 100px;
  width: 130px;
  padding-left: 25px;
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