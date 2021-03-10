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
    padding-top: 275px; /* Location of the content container */
`;

const Modal_Con = styled.div`
display: flex;
flex-direction: column;
    justify-content: center;
    background-color: white;
    width: 35%; /* Width in proportion to its parent container*/
    max-width: 320px; /* Max width where it stops expanding */
    height: auto; /* Height in proportion to its parent container */
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

const Button = styled.button`
  height: 60px;
  width: 175px;
  background-color: white;
  padding: 10px;
  margin-top: 10px;

  &:hover {
    background-color: lightgrey;
    border: 1px solid black;
  border-radius: 5px;
  transition: all ease 0.3s;
  }

`;

class QuestionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: '',
      newEmail: '',
      newQuestion: '',
      send: false,
    };
    this.selectModal = this.selectModal.bind(this);
    this.postQuestion = this.postQuestion.bind(this);
    this.type = this.type.bind(this);
    this.rejectQuestion = this.rejectQuestion.bind(this);
  }

  selectModal(event) {
    event.stopPropagation();
    this.props.closeModal();
  }

  type(event) {
    if (event.target.placeholder === 'Example: jack@email.com') {
      this.setState({
        newEmail: event.target.value,
      });
    } else if (event.target.placeholder === 'Examples: jackson11!') {
      this.setState({
        newName: event.target.value,
      });
    } else {
      this.setState({
        newQuestion: event.target.value,
      });
    }
  }

  postQuestion() {
    axios.post('/qa/questions', {
      body: this.state.newQuestion,
      name: this.state.newName,
      email: this.state.newEmail,
      product_id: this.props.product_id,
    })
      .then((response) => {
        console.log('successful post!', response);
      });
  }

  rejectQuestion() {
    alert('You must enter something in all fields and provide a valid email');
  }

  render() {
    const divStyle = {
      display: this.props.displayModal ? 'block' : 'none',
    };
    return (
      <Modal className="modal" onClick={(event) => { this.selectModal(event); }} style={divStyle}>
        <Modal_Con className="modal-content" onClick={(event) => { event.stopPropagation(); }}>
          <Close className="close" onClick={(event) => { this.selectModal(event); }}>&times;</Close>
          <NewForm>
            <NewQueA placeholder="Example: jack@email.com" type="text" value={this.state.newEmail} onChange={(event) => { this.type(event); }} />
            <p>For authentication reasons, you will not be emailed</p>
            <NewQueB placeholder="Examples: jackson11!" type="text" value={this.state.newName} onChange={(event) => { this.type(event); }} />
            <p>For privacy reasons, do not use your full name or email address</p>
            <NewQueC placeholder="Enter Question Here..." type="text" value={this.state.newQuestion} onChange={(event) => { this.type(event); }} />
            <Button onSubmit={this.postQuestion}> Submit Question </Button>
          </NewForm>
        </Modal_Con>
      </Modal>
    );
  }
}

export default QuestionModal;
