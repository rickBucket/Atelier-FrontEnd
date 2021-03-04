import React from 'react';
import styled from 'styled-components';
import PhotoModal from './PhotoModal.jsx';

const Photos = styled.img`
  height: 100px;
  width: 130px;
  padding-left: 25px;
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
        <div>
        <Photos src={photo} alt="Product" onClick={ this.selectModal } />
        <PhotoModal photo={photo} displayModal={this.state.modal}
        closeModal={this.selectModal} />
        </div>
      </div>
    );
  }
}
export default AnswerPhoto;

//create a modal that basically enlarges photo and
{/* <span className="close">$times;</span> */}