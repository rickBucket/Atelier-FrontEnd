/* eslint-disable */
import React from 'react';
import Answers from './Answers.jsx';
import styled from 'styled-components';
import AnswerModal from './AnswerModal.jsx';
import axios from 'axios';

const ContainerA = styled.div`
  border-top: 0px solid grey;
  border-radius: 12px;
  margin: 12px;
  padding: 0px 20px 0px 20px;
  width: 100%;
  display: block;
`;

const EachQ = styled.div`
  display: flex;
  flex-direction: row;
`;

const MoveRight = styled.div`
  margin-left: auto;
  display: flex;
  float: right;
`;

const ContainerB = styled.div`
  padding: 10px;
  border-top: 3px grey solid;
  margin: 3px;
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

const LoadButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: bold;
`;

const Divide = styled.span`
  margin-left: 5px;
  margin-right: 5px;
  padding-top: 17.5px;
  font-weight: bold;
  display: flex;
`;


const ScrollList = styled.ul`
  list-style:none;
  max-height:350px;
  margin:0;
  overflow:auto;
  padding:0;
  text-indent:10px;
`;
//change my scroll list to where it only shows after you click show more!
//always show two with no scroll


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
    };
    this.selectModal = this.selectModal.bind(this);
    this.showMore = this.showMore.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleClick(event) {
    axios.put('/qa/questions', {
      question_id: this.props.item.question_id,
      type: event.target.name,
    })
      .then((response) => {
        console.log(response);
      });
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

            <h3>Q: {this.props.item.question_body}</h3>

               <MoveRight>
              <p> Helpful? </p>
              <Button name="helpful" onClick={(event) => { event.preventDefault(); this.handleClick(event); }}> Yes </Button>
              <p>({this.props.item.question_helpfulness})</p>
              <Divide className="divider"> | </Divide>
              <Button name="report" onClick={(event) => { event.preventDefault(); this.handleClick(event); }}> Report </Button>
              <Divide className="divider"> | </Divide>
              <Button onClick={ this.selectModal }> Add Answer </Button>
              </MoveRight>

           </EachQ>


        <div>

        {this.state.itemsToShow <=2 ?
        <div>
        {this.state.answers.slice(0,this.state.itemsToShow).map((answer, i) => {
          return (
            <ContainerB>
            <Answers item={answer} key={i} seller={this.props.item.asker_name} reportItem={this.props.item.reported}/>
            </ContainerB>
          )
        })}
        </div>
         :
          <ScrollList>
        {this.state.answers.slice(0,this.state.itemsToShow).map((answer, i) => {
          return (
            <ContainerB>
            <Answers item={answer} key={i} seller={this.props.item.asker_name} reportItem={this.props.item.reported}/>
            </ContainerB>
          )
        })}
          </ScrollList>
            }
        {this.state.answers.length >= 2 && !(this.state.expanded) ? (
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
