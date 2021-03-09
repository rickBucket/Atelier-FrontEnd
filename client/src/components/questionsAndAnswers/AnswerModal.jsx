import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Modal = styled.div`
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Overlay effect: translucent background: black w/ partial opacity */
    z-index: 150; /* Overlay effect: positioned over other containers */
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    position: fixed; /* Fix position on the top-left corner*/
    top: 0;
    left: 0;
    overflow: auto; //Enable scroll if needed
    padding-top: 150px; /* Location of the content container */
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

const Close = styled.span`
   color: #aaaaaa;
   float: right; /* Positioned to the right of the parent container whichever size it is */
   font-size: 25px;
   font-weight: bold;
`;

const NewForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NewQueA = styled.input`
  padding: 5px;
  width: 170px;
`;

const NewQueB = styled.input`
  padding: 5px;
  width: 170px;
`;

const NewQueC = styled.textarea`
  padding: 5px;
  height: 100px;
  width: 200px;
`;

const AddImg = styled.input`
`;

const Button = styled.button`
  text-decoration: underline;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    font-weight: bold;
  }
`;

// CLASS STARTS HERE ---------------------------//

class AnswerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: '',
      newEmail: '',
      newAnswer: '',
      image: [],
    };
    this.selectModal = this.selectModal.bind(this);
    this.postAnswer = this.postAnswer.bind(this);
    this.type = this.type.bind(this);
    this.addImg = this.addImg.bind(this);
  }
  selectModal(event) {
    event.stopPropagation();
    this.props.closeModal();
  }

  type(event) {
    if (event.target.placeholder === 'Example: jack@email.com') {
      this.setState({
        newEmail: event.target.value
      });
    } else if (event.target.placeholder === 'Examples: jackson11!') {
      this.setState({
        newName: event.target.value
      });
    } else {
      this.setState({
        newAnswer: event.target.value
      });
    }
  }

  postAnswer() {
    axios.post(`/qa/questions`, {
      body: this.state.newAnswer,
      name: this.state.newName,
      email: this.state.newEmail,
      photos: this.state.image,
      question_id: this.props.question_id,
    })
      .then(response => {
        console.log('successful answer post', response.data);
      });
  }

  addImg(event) {
    let array = [];
    array.push(URL.createObjectURL(event.target.files[0]));
    this.setState({
      images: array,
    });
  }

  render() {
    const divStyle = {
      display: this.props.displayModal ? 'block' : 'none',
    };
    return (
      <Modal className="modal" onClick={(event) => { this.selectModal(event); }} style={divStyle}>
          <Modal_Con className="modal-content" onClick={event => {event.stopPropagation(); }}>
            <Close className="close" onClick={(event) => { this.selectModal(event); }}>&times;</Close>
            <NewForm>
              <NewQueA placeholder="Example: jack@email.com"
              value={this.state.newEmail} type="text" onChange={event => {event.preventDefault(); this.type(event); }} />
              <p>For authentication reasons, you will not be emailed</p>
              <NewQueB placeholder="Examples: jackson11!" type="text" value={this.state.newName} onChange={event => {event.preventDefault(); this.type(event); }} />
              <p>For privacy reasons, do not use your full name or email address</p>
              <NewQueC placeholder="Enter Answer Here..." type="text" value={this.state.newAnswer} onChange={event => {event.preventDefault(); this.type(event); }} />
              <AddImg type='file'onChange={this.addImg}/>
              <Button onClick={() => { this.postAnswer(); }}> Submit Answer </Button>
            </NewForm>
          </Modal_Con>
      </Modal>
    );
  }
}
export default AnswerModal;
