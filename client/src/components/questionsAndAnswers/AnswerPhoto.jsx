import React from 'react';
import styled from 'styled-components';
import PhotoModal from './PhotoModal.jsx';

const Photos = styled.img`
  max-height: 100%;
  max-width: 100%;
  margin-left: 25px;
`;

const PhotoContainer = styled.div`
  display: flex;
  height: 100px;
  width: 100px;
  align-items: center;
`;

class AnswerPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.selectModal = this.selectModal.bind(this);
  }
  selectModal() {
    this.setState({
      modal: !this.state.modal //toggle
    })
  }

  render() {
    const {photo} = this.props;
    return (
      <div>
        <PhotoContainer>
        <Photos src={photo} alt="Product" onClick={ this.selectModal } />
        <PhotoModal photo={photo} displayModal={this.state.modal}
        closeModal={this.selectModal} />
        </PhotoContainer>
      </div>
    );
  }
}
export default AnswerPhoto;

//create a modal that basically enlarges photo and
{/* <span className="close">$times;</span> */}