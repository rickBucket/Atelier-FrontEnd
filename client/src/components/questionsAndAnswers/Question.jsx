/* eslint-disable */
import React from 'react';
import Answers from './Answers.jsx';
import styled from 'styled-components';
import AnswerModal from './AnswerModal.jsx';
import axios from 'axios';

const ContainerA = styled.div`
  border: 0px solid grey;
  border-radius: 12px;
  margin: 12px;
  padding: 0px 20px 0px 20px;
  box-shadow: 3px 3px 8px rgba(0,0,0,0.5);
  max-width: 1000px;
`;

const EachQ = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
`;

const MoveRight = styled.div`
  display: flex;
  float: right;
`;

const ContainerB = styled.div`
  padding: 10px;
  border: 3px green solid;
  margin: 3px;
`;

const Button = styled.button`
  text-decoration: underline;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const LoadButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: bold;
`;

const Divide = styled.span`
  margin-left: 5px;
  margin-left: 5px;
  padding-top: auto;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

const Q = styled.h3`
  display: flex;
  float: left;
`;

const ScrollList = styled.ul`
  list-style:none;
  max-height:200px;
  margin:0;
  overflow:auto;
  padding:0;
  text-indent:10px;
`;


// CLASS STARTS HERE ------------------------//

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      loadedState: false,
      loadMore: false,
      modal: false,
      itemsToShow: 2,
      expanded: false,
      clickedYes: false,
      clickedReport: false,
      report: 'report',
      yes: 'yes',
    };
    this.selectModal = this.selectModal.bind(this);
    this.showMore = this.showMore.bind(this);
    this.click = this.click.bind(this);
  }

  componentDidMount() {
    const object = this.props.item.answers
    if (object.length <= 1) {
      this.setState({
        answers: Object.values(object),
        loadedState: true,
        loadMore: false
      })
    } else {
      this.setState({
        answers: Object.values(object),
        loadedState: true,
        loadMore: true
      })
    }
  }

  selectModal() {
    this.setState({
      modal: !this.state.modal //toggle
    })
  }

  showMore() {
    this.state.itemsToShow === 2 ? (
      this.setState({
        itemsToShow: this.state.answers.length,
        expanded: true,
      })
    ) : (
      this.setState({
        itemsToShow: 2,
        expanded: false,
      })
    )
  }

  click(event) {
    if (!this.state.clickedYes) {
    axios.put('/qa/questions/', {
      question_id: this.props.item.question_id,
      yes: 'yes'
    })
    .then(response => {
      console.log(reponse);
      this.setState({
        clickedYes: true
      })
    })
  }
  }

  render() {
    if (!this.state.loadedState) {
      return(
        null
      )
    } else {
    return (
    <ContainerA>

           <EachQ>
            <Q>
            <h3>Q: {this.props.item.question_body}</h3>
            </Q>

               <MoveRight>
              <p> Helpful? </p>
              <Button name="yes"> Yes </Button>
              <p>({this.props.item.question_helpfulness})</p>
              <Divide className="divider"> | </Divide>
              <Button onClick={ this.selectModal }> Add Answer </Button>
              </MoveRight>

           </EachQ>


        <div>
          <ScrollList>
        {this.state.answers.slice(0,this.state.itemsToShow).map((answer) => {
          return (
            <ContainerB>
            <Answers item={answer} key={this.state.answers.id} seller={this.props.item.asker_name}/>
            </ContainerB>
          )
        })}
        </ScrollList>
        {this.state.answers.length > 1 && !(this.state.expanded) ? (
          <LoadButton onClick={(event) => { this.showMore(); } }> LOAD MORE ANSWERS </LoadButton>
          ) : (
          <LoadButton onClick={(event) => { this.showMore(); }}> Collapse List </LoadButton>
          )}
        </div>
          <AnswerModal displayModal={this.state.modal} closeModal={this.selectModal} question_id={this.props.item.question_id}/>
    </ContainerA>
    );
  }
}
}

export default Question;

// Q: -
// A: -
// helpful question button -value helpful, yes is button, {} answers.count value
// add answer button
